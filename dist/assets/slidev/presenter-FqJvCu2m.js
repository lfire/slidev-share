import{_ as X,a as Z,b as Y,c as ee,d as te}from"../modules/unplugin-icons-DY90bV9T.js";import{t as M,d as V,c as x,i as _,A as s,o as i,y as g,b,e,l as a,F as T,x as $,g as N,Z as se,a1 as oe,a2 as ne,h as z,p as H,a as O,D as U,M as le,_ as re,J as ae,a3 as ie,a4 as ce,k as S,a5 as ue}from"../modules/vue-C5xgGysf.js";import{j as de,b as q,C as pe,u as me,c as L,h as ve,k as _e,d as fe,l as xe}from"../index-CigzRTy9.js";import{r as be,u as ge,S as A,I as G,Q as he,a as ke,N as ye,G as Ce}from"./SlidesShow-91C3uG4Z.js";import{s as we,b as j,p as Se,S as $e,g as Ne,c as ze,i as De,d as Ie}from"./bottom-B_5SV3Qm.js";import{N as Fe}from"./NoteDisplay-Cztqm8v6.js";import je from"./DrawingControls-DMrl197o.js";import{u as Me}from"./DrawingPreview-yewwHsSW.js";import"../modules/shiki-CwsrKtTr.js";import"./title-renderer-JvFm5EME.js";function Te(l){var r;return{info:M((r=de(l))==null?void 0:r.meta.slide),update:async()=>{}}}const Ve=V({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(l){const r=l,{info:t}=Te(r.no);return(o,m)=>{var f,u;return i(),x(Fe,{class:_(r.class),note:(f=s(t))==null?void 0:f.note,"note-html":(u=s(t))==null?void 0:u.noteHTML,"clicks-context":o.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),qe=q(Ve,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.48.7_postcss@8.4.38_vite@5.2.6/node_modules/@slidev/client/internals/NoteStatic.vue"]]),Q=l=>(H("data-v-9f5e5b10"),l=l(),O(),l),Be=["title"],Pe={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},Re=Q(()=>e("div",{"flex-auto":""},null,-1)),Ue={"text-primary":""},Le=Q(()=>e("span",{op25:""},"/",-1)),Ae={op50:""},Ge=["max"],He=V({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(l){const r=l,t=g(()=>r.clicksContext.total),o=g({get(){return r.clicksContext.current>t.value?-1:r.clicksContext.current},set(u){r.clicksContext.current=u}}),m=g(()=>Array.from({length:t.value+1},(u,c)=>c));function f(){(o.value<0||o.value>t.value)&&(o.value=0)}return(u,c)=>{const D=X;return i(),b("div",{class:_(["flex gap-1 items-center select-none",t.value?"":"op50"]),title:`Clicks in this slide: ${t.value}`},[e("div",Pe,[a(D,{"text-sm":"",op50:""}),Re,o.value>=0&&o.value!==s(pe)?(i(),b(T,{key:0},[e("span",Ue,$(o.value),1),Le],64)):N("v-if",!0),e("span",Ae,$(t.value),1)]),e("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:c[2]||(c[2]=n=>o.value=u.clicksContext.total)},[(i(!0),b(T,null,se(m.value,n=>(i(),b("div",{key:n,border:"y main","of-hidden":"",relative:"",class:_([n===0?"rounded-l border-l":"",n===t.value?"rounded-r border-r":""]),style:z({width:t.value>0?`${1/t.value*100}%`:"100%"})},[e("div",{absolute:"","inset-0":"",class:_(n<=o.value?"bg-primary op15":"")},null,2),e("div",{class:_([+n==+o.value?"text-primary font-bold op100 border-primary":"op30 border-main",n===0?"rounded-l":"",n===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},$(n),3)],6))),128)),oe(e("input",{"onUpdate:modelValue":c[0]||(c[0]=n=>o.value=n),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:t.value,step:1,"z-10":"",op0:"",style:z({"--thumb-width":`${1/(t.value+1)*100}%`}),onMousedown:f,onFocus:c[1]||(c[1]=n=>{var y;return(y=n.currentTarget)==null?void 0:y.blur()})},null,44,Ge),[[ne,o.value]])],32)],10,Be)}}}),Oe=q(He,[["__scopeId","data-v-9f5e5b10"],["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.48.7_postcss@8.4.38_vite@5.2.6/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),B=l=>(H("data-v-d111f246"),l=l(),O(),l),Qe={class:"bg-main h-full slidev-presenter"},We=B(()=>e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Ee={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Je=B(()=>e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Xe={class:"border-t border-main py-1 px-2 text-sm"},Ze={class:"grid-section bottom flex"},Ye=B(()=>e("div",{"flex-auto":""},null,-1)),et={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},tt={class:"progress-bar"},st=V({__name:"presenter",setup(l){const r=M();be(),ge(r);const{clicksContext:t,currentSlideNo:o,currentSlideRoute:m,hasNext:f,nextRoute:u,slides:c,queryClicks:D,getPrimaryClicks:n,total:y}=me(),{isDrawing:W}=Me(),E=L.titleTemplate.replace("%s",L.title||"Slidev");ve({title:`Presenter - ${E}`}),M(!1);const{timer:J,resetTimer:P}=_e(),K=g(()=>c.value.map(w=>fe(w))),d=g(()=>t.value.current<t.value.total?[m.value,t.value.current+1]:f.value?[u.value,0]:null),C=g(()=>d.value&&K.value[d.value[0].no-1]);return U([m,D],()=>{C.value&&(C.value.current=d.value[1])},{immediate:!0}),le(),re(()=>{const w=r.value.querySelector("#slide-content"),v=ae(ie()),I=ce();U(()=>{if(!I.value||W.value||!we.value)return;const p=w.getBoundingClientRect(),h=(v.x-p.left)/p.width*100,k=(v.y-p.top)/p.height*100;if(!(h<0||h>100||k<0||k>100))return{x:h,y:k}},p=>{xe.cursor=p})}),(w,v)=>{var R;const I=Z,p=Y,h=ee,k=te;return i(),b(T,null,[e("div",Qe,[e("div",{class:_(["grid-container",`layout${s(Se)}`])},[e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[a(A,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:S(()=>[a(ke,{"render-context":"presenter"})]),_:1}),(i(),x(Oe,{key:(R=s(m))==null?void 0:R.no,"clicks-context":s(n)(s(m)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),We],512),e("div",Ee,[d.value&&C.value?(i(),x(A,{key:"next",class:"h-full w-full"},{default:S(()=>[(i(),x($e,{is:d.value[0].component,key:d.value[0].no,"clicks-context":C.value,class:_(s(Ne)(d.value[0])),route:d.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):N("v-if",!0),Je]),N(" Notes "),(i(),b("div",Ke,[(i(),x(qe,{key:`static-${s(o)}`,no:s(o),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:z({fontSize:`${s(ze)}em`}),"clicks-context":s(t)},null,8,["no","style","clicks-context"])),e("div",Xe,[a(G,{title:"Increase font size",onClick:s(De)},{default:S(()=>[a(I)]),_:1},8,["onClick"]),a(G,{title:"Decrease font size",onClick:s(Ie)},{default:S(()=>[a(p)]),_:1},8,["onClick"]),N("v-if",!0)])])),e("div",Ze,[a(ye,{persist:!0}),Ye,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:v[2]||(v[2]=(...F)=>s(P)&&s(P)(...F))},[a(h,{class:"absolute"}),a(k,{class:"absolute opacity-0"})]),e("div",et,$(s(J)),1)]),(i(),x(je,{key:2}))],2),e("div",tt,[e("div",{class:"progress h-3px bg-primary transition-all",style:z({width:`${(s(o)-1)/(s(y)-1)*100}%`})},null,4)])]),a(Ce),a(he,{modelValue:s(j),"onUpdate:modelValue":v[3]||(v[3]=F=>ue(j)?j.value=F:null)},null,8,["modelValue"])],64)}}}),mt=q(st,[["__scopeId","data-v-d111f246"],["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.48.7_postcss@8.4.38_vite@5.2.6/node_modules/@slidev/client/pages/presenter.vue"]]);export{mt as default};

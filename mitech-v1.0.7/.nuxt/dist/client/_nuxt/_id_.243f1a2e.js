import{_ as c}from"./Header.460fa155.js";import{b as _,g as x}from"./state.4da28978.js";import{a as $}from"./axios.28bc18a3.js";import{M as g}from"./index.3c6563bf.js";import{aJ as d,$ as t,a0 as e,a1 as v,n}from"./_plugin-vue_export-helper.2c3522c3.js";import{_ as m}from"./ChatBot.85e95aeb.js";import{_ as i}from"./Footer.c5032859.js";import{_ as p}from"./OffCanvasMobileMenu.b67ad2ce.js";import"./entry.0cdb93ce.js";import"./HeaderTop.fc351d8a.js";/* empty css                                */const y={data(){return{markdownContent:""}},computed:{renderedMarkdown(){return new g().render(this.markdownContent)}},async mounted(){this.markdownContent=await this.get()},methods:{async get(){try{const o=await $.get(_().value);return console.log("response:"),console.log(o),o.data}catch(o){console.log(o)}}}},B={class:"container"},H=["innerHTML"],L={key:1},b=v("div",null,null,-1);function F(o,r,l,f,a,s){return t(),e("div",B,[a.markdownContent?(t(),e("div",{key:0,innerHTML:s.renderedMarkdown},null,8,H)):(t(),e("div",L,"Loading...")),b])}const u=d(y,[["render",F]]),N={components:{Header:c,Footer:i,OffCanvasMobileMenu:p,Md:u,ChatBot:m},data(){return{id:this.$route.params.id,url:_().value}},methods:{},async mounted(){x()}};function O(o,r,l,f,a,s){const h=c,k=u,w=m,M=i,C=p;return t(),e("div",null,[n(h),n(k),n(w),n(M),n(C)])}const K=d(N,[["render",O]]);export{K as default};

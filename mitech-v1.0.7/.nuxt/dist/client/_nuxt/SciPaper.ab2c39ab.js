import{i as m}from"./state.4da28978.js";import{a as g}from"./axios.28bc18a3.js";import{A as $}from"./Paper_1.d55cd511.js";import{aJ as f,a0 as n,a1 as i,F as d,as as h,aa as c,ai as u,$ as p,n as y,ak as v,U as w}from"./_plugin-vue_export-helper.2c3522c3.js";import"./entry.0cdb93ce.js";/* empty css             *//* empty css                *//* empty css               *//* empty css                */const x={components:{ArticleItem:$},name:"myarticle",data(){return{maxpage:5,pagelist:[1],nowpage:1,one_page:5,papers:[]}},mounted(){this.papers=[];var o="http://121.36.19.201/api/get_works/?filter=authorships.author.id:"+m().value+"&page="+this.$data.nowpage+"&per_page="+this.$data.one_page;console.log(o),g.post(o,{},{headers:{"content-type":"application/json"}}).then(a=>{this.$data.maxpage=parseInt((a.data.meta.count+this.$data.one_page-1)/this.$data.one_page),console.log(this.$data.maxpage),this.$data.pagelist=[];var l=0;for(let t=this.$data.nowpage-1;t<=this.$data.maxpage&&(t>=1&&(this.$data.pagelist.push(t),l++),l!=4);t++);for(let t=0;t<a.data.results.length;t++)this.$data.papers.push({title:a.data.results[t].title,publication_date:a.data.results[t].publication_date,language:a.data.results[t].language,authorships:a.data.results[t].authorships,cited_by_count:a.data.results[t].cited_by_count})}).catch(a=>{console.error("Error in search",a)})},methods:{updatepage(){this.papers=[];var o="http://121.36.19.201/api/get_works/?filter=authorships.author.id:A5013134577&page="+this.$data.nowpage+"&per_page="+this.$data.one_page;console.log(o),g.post(o,{},{headers:{"content-type":"application/json"}}).then(a=>{this.$data.maxpage=parseInt((a.data.meta.count+this.$data.one_page-1)/this.$data.one_page),this.$data.pagelist=[];var l=0;for(let t=this.$data.nowpage-1;t<=this.$data.maxpage&&(t>=1&&(console.log(t),this.$data.pagelist.push(t),l++),l!=4);t++);for(let t=0;t<a.data.results.length;t++)this.$data.papers.push({title:a.data.results[t].title,publication_date:a.data.results[t].publication_date,language:a.data.results[t].language,authorships:a.data.results[t].authorships,cited_by_count:a.data.results[t].cited_by_count})}).catch(a=>{console.error("Error in search",a)})},nextpage(){this.$data.nowpage=this.$data.nowpage+1,this.updatepage()},lastpage(){this.$data.nowpage=this.$data.nowpage-1,this.updatepage()},setpage(o){this.$data.nowpage=o,this.updatepage()}}},k={class:"myart1"},b={class:"ht-pagination mt-30 pagination justify-content-center"},C={class:"pagination-wrapper"},E={class:"pagination"},I=i("a",null,"PREV",-1),N=[I],S={key:0},V=["onClick"],j={key:1},A=i("a",null,"Next",-1),B=[A];function P(o,a,l,t,e,r){const _=w("article-item");return p(),n(d,null,[i("div",k,[(p(!0),n(d,null,h(e.papers,s=>(p(),n("div",{key:s.cited_by_count},[y(_,{paper:s},null,8,["paper"])]))),128))]),i("div",b,[i("div",C,[i("ul",E,[i("li",{class:c(["page-item",{disabled:e.nowpage==1}]),onClick:a[0]||(a[0]=s=>r.lastpage())},N,2),e.pagelist[0]!=1?(p(),n("li",S,"...")):u("",!0),(p(!0),n(d,null,h(e.pagelist,s=>(p(),n("li",{class:c(["page-item",{active:e.nowpage==s}]),key:s.id,onClick:F=>r.setpage(s)},[i("a",null,v(s),1)],10,V))),128)),e.pagelist[e.pagelist.length-1]!=e.maxpage?(p(),n("li",j,"...")):u("",!0),i("li",{class:c(["page-item",{disabled:e.nowpage==e.maxpage}]),onClick:a[1]||(a[1]=s=>r.nextpage())},B,2)])])])],64)}const K=f(x,[["render",P]]);export{K as default};

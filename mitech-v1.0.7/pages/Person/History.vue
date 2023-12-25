<template>
    <div class="myart1">
        <div v-for="paper in papers" :key="paper.cited_by_count">
            <article-item :paper="paper"/>
        </div>
    </div>
    <div class="ht-pagination mt-30 pagination justify-content-center">
        <div class="pagination-wrapper">
            <ul class="pagination">
                <li class="page-item" v-bind:class="{ disabled: nowpage==1 }" @click="lastpage()"><a>PREV</a></li>
                <li v-if="pagelist[0] != 1">...</li>
                <li class="page-item" v-for="page in pagelist" :key="page.id" v-bind:class="{ active: nowpage==page }" @click="setpage(page)"><a>{{ page }}</a></li>
                <!-- <li class="page-item"><a href="#">2</a></li>
                <li class="page-item"><a href="#">3</a></li>
                <li class="page-item"><a href="#">4</a></li> -->
                <li v-if="pagelist[pagelist.length-1] != maxpage">...</li>
                <li class="page-item" v-bind:class="{ disabled: nowpage==maxpage }" @click="nextpage()"><a>Next</a></li>
            </ul>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios';
import ArticleItem from '../../components/Paper_1.vue';
export default {
components: {ArticleItem},
name: "myarticle",
data() {
    return {
        maxpage:5,
        pagelist:[1],
        nowpage:1,
        one_page:5,
        papers:[],
    };
},
mounted() {
    this.papers=[]
    var address="http://121.36.19.201/api/get_works/?filter=authorships.author.id:"+useSCIid().value+"&page="+this.$data.nowpage+"&per_page="+this.$data.one_page
    console.log(address)
    axios.post(address,{},{
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        this.$data.maxpage=parseInt((response.data.meta.count+this.$data.one_page-1)/this.$data.one_page)
        console.log(this.$data.maxpage);
        this.$data.pagelist=[]
        var cnt=0
        for(let i=this.$data.nowpage-1;i<=this.$data.maxpage;i++){
            if(i>=1){
                this.$data.pagelist.push(i)
                cnt++;  
            }
            if(cnt==4) {
                break;
            }
        }
        for(let i=0;i<response.data.results.length;i++){
            this.$data.papers.push({
                "title":response.data.results[i].title,
                "publication_date":response.data.results[i].publication_date,
                "language":response.data.results[i].language,
                "authorships":response.data.results[i].authorships,
                "cited_by_count":response.data.results[i].cited_by_count
            })
        }
    })
    .catch(error => {
        console.error("Error in search", error);
    }); 
},
methods: {
    updatepage(){
        this.papers=[]
        var address="http://121.36.19.201/api/get_works/?filter=authorships.author.id:A5013134577&page="+this.$data.nowpage+"&per_page="+this.$data.one_page
        console.log(address)
        axios.post(address,{},{
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            this.$data.maxpage=parseInt((response.data.meta.count+this.$data.one_page-1)/this.$data.one_page)
            this.$data.pagelist=[]
            var cnt=0
            for(let i=this.$data.nowpage-1;i<=this.$data.maxpage;i++){
                if(i>=1){
                    console.log(i)
                    this.$data.pagelist.push(i)
                    cnt++;  
                }
                if(cnt==4) {
                    break;
                }
            }
            for(let i=0;i<response.data.results.length;i++){
                this.$data.papers.push({
                    "title":response.data.results[i].title,
                    "publication_date":response.data.results[i].publication_date,
                    "language":response.data.results[i].language,
                    "authorships":response.data.results[i].authorships,
                    "cited_by_count":response.data.results[i].cited_by_count
                })
            }
        })
        .catch(error => {
            console.error("Error in search", error);
        }); 
    },
    nextpage(){
        this.$data.nowpage=this.$data.nowpage+1;
        this.updatepage();
    },
    lastpage(){
        this.$data.nowpage=this.$data.nowpage-1;
        this.updatepage();
    },
    setpage(p){
        this.$data.nowpage=p;
        this.updatepage();
    },
},
};
</script>

<style>
.myart1{
    line-height: 30px;
}
</style>

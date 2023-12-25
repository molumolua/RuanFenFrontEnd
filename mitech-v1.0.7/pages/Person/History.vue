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
                <li v-if="pagelist[pagelist.length-1] != maxpage">...</li>
                <li class="page-item" v-bind:class="{ disabled: nowpage==maxpage }" @click="nextpage()"><a>Next</a></li>
            </ul>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios';
import ArticleItem from '../../components/Paper_2.vue';
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
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
    axios.get('http://121.36.19.201/api/history/', { headers }).then((response) => {
        console.log(response.data)
        this.$data.maxpage=parseInt((response.data.length + this.$data.one_page-1)/this.$data.one_page)
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
        response.data = response.data.slice().reverse();
        console.log(response.data)
        for(let i=0;i < response.data.length && i < 5;i++){
            this.$data.papers.push({
                "title":response.data[i].title,
                "publication_date":response.data[i].publication_date,
                "language":response.data[i].language,
                "authorships":response.data[i].name,
                "cited_by_count":response.data[i].cited_by_count,
                "ID":response.data[i].open_alex_id
            })
        }
    })
    .catch(error => {
        console.error(error);
    }); 
},
methods: {
    updatepage(){
        this.papers=[]
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
        axios.get('http://121.36.19.201/api/history/', { headers }).then((response) => {
            console.log(response.data)
            this.$data.maxpage=parseInt((response.data.length+this.$data.one_page-1)/this.$data.one_page)
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
            response.data = response.data.slice().reverse();
            for(let i=5*(this.$data.nowpage - 1); i < response.data.length && i < 5 * this.$data.nowpage;i++){
                this.$data.papers.push({
                    "title":response.data[i].title,
                    "publication_date":response.data[i].publication_date,
                    "language":response.data[i].language,
                    "authorships":response.data[i].name,
                    "cited_by_count":response.data[i].cited_by_count,
                    "ID":response.data[i].open_alex_id
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

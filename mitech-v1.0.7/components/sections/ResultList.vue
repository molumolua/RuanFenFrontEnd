<template>
    <div class="hello">
        <div class="filter">
            <el-affix position="top" :offset="120">
                <el-row class="filter-title">相关搜索</el-row>
                    <!-- <el-collapse v-model="activeNames">
                        <el-collapse-item v-for="filterProp in filterProps" :title="filterProp" v-if="filter[filterProp].length > 1" :key="filterProp">
                            <el-checkbox-group class="filter-option"
                            @change="handleChange()"
                            v-model="checkedFilter[filterProp]"
                            :min="1">
                            <el-checkbox v-for="item in filter[filterProp]" :label="item" :key="item">{{item}}</el-checkbox>
                          </el-checkbox-group>
                        </el-collapse-item>
                      </el-collapse> -->
                      <template v-for="rec in recommends">
                        <el-row class="recommend-row" @click="search(rec.keyword)">
                      <el-text class="recommend" v-if="rec.keyword">
                        <el-icon><Search /></el-icon>
                        {{rec.keyword}}
                        </el-text>
                    </el-row>
                      </template>
                      <div class="space"></div>
                        <el-row class="filter-title">领域筛选</el-row>
                      <template v-for="(value,key,index) in fields">
                        <el-row v-if="index<(fold?3:8)" class="field">
                        <el-icon class="field-button" @click="selectWithField(key ,true)"><CircleCheck/></el-icon>
                        <el-icon class="field-button" @click="selectWithField(key,false)"><CircleClose/></el-icon>
    
                        <el-text>{{key}}({{value}})</el-text>
                        </el-row>
                        </template>
                        <el-row class="more" @click="changeState()" v-if="fields">
                            <el-text>{{fold?"More...":"Fold"}}</el-text>
                        </el-row>
                      <div class="space2"></div>
                    </el-affix >
                    </div>
        <el-container>
            <el-aside width="300px" class="aside-back">
            </el-aside>
        <el-container class="result-display">
            <el-main>
            <div class="select-num">
                已选择：{{selectedMap.size}} &emsp;
                <el-button @click="selectAll(false)">清空选择</el-button>
                <el-button @click="selectAll(true)">全选当页</el-button>
                <el-button @click="analyse()">数据分析</el-button>
            </div>
        <div class="min-height" v-loading="loading">
            <div v-if="!list.length" class="mid"> <el-empty description="当前暂时没有结果捏~" /></div>
        <div v-for="res in list">
            <div 
            class="item">
            <el-button class="select-button" :type="res.selected?'primary':'default'" :icon="res.selected?Select:Plus" @click="select(res,!res.selected)"></el-button>
            <el-card class="article"
                :key="res.id"
                @click="gotoDetail(res)">
                <div>
                <div class="tag">
                    <div class="subtag">
                        <div class="tag-color">&emsp;</div>
                        <div class="tag-content">&emsp;发布时间 : {{res.publication_date}}&emsp;</div>
                    </div>
                    <div class="subtag">
                        <div class="tag-color">&emsp;</div>
                        <div class="tag-content">&emsp;引用量 : {{res.cited_by_count}}&emsp;</div>
                    </div>
                    <div class="subtag">
                        <div class="tag-color">&emsp;</div>
                        <div class="tag-content">&emsp;相关度 : {{(res.relevance_score?res.relevance_score:res.concepts[0].score*1000).toFixed(2)}}&emsp;</div>
                    </div>
                </div>
                <p class="article-title">{{res.title}}</p>
                <p class="article-key-word"><span class="prop">关键词 : &emsp;</span>{{ res._keywords.length?res._keywords.join(", "):"(NULL)"}}</p>
                <el-text line-clamp="4" class="article-abstract"><span class="prop">摘&emsp;要 : &emsp;</span>{{res.abstract?res.abstract:"(NULL)"}}</el-text>
                <p class="article-else">
                <p>作者 : {{res._authors.length?res._authors.join(", "):"(NULL)"}}</p>
                <span>领域 : {{res.concepts[0].display_name?res.concepts[0].display_name:"(NULL)"}}</span>&emsp;
                <span>期刊 : {{res.primary_location.source?res.primary_location.source.display_name:"(NULL)"}}</span></p>
            </div>
            </el-card>
        </div>
        </div>
        </div>

            <el-pagination
            class="mid"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="perPage"
            layout="total, prev, pager, next"
            :total="count">
            </el-pagination>
        </el-main>
        </el-container>
        
        <el-aside width="40px"></el-aside>
        </el-container>
    </div>
</template>
  
<script setup>
import axios from 'axios';
import emitter from '~~/plugins/event-bus.client';
import { ElMessage } from 'element-plus'
import {
  Select,
  Plus,
  CircleCheck,
  CircleClose,
  Search
} from '@element-plus/icons-vue'
</script>
<script>
const filterProps = ["keyword"];
export const perPage = 10;
export default{
    data() {
        return {
            fold:true,
            cnt:0,
            perPage:perPage,
            loading:false,
            fields:{},
            filterProps:filterProps,
            checkedFilter:{
                author:[],
                field:[],
                keyword:[],
                periodical:[],
            },
            filter:{
                author:[],
                field:[],
                keyword:[],
                periodical:[],
            },
            selectedMap:new Map(),
            url:["",""],
            keywords:{
            },
            recommends:[{keyword:"",count:0},{keyword:"",count:0},{keyword:"",count:0},{keyword:"",count:0},{keyword:"",count:0},],
            activeNames:[],
            currentPage : 1,
            count:0,
            list:"",
        }
    },
    mounted() { 
        emitter.on('search-url',(url)=>{
            if(this.cnt==0){
                this.cnt=1;
                this.$data.currentPage = 1;
                if(url==this.$data.url)return;
                this.$data.url = url;
                this.getResults(true);
                this.cnt=0;
            }
        })
    },
    methods:{
        changeState(){
            this.fold=!this.fold;
        },
        handleChange(){
        },
        getResults(flag){
            if(flag)this.$data.selectedMap.clear();
            var url = this.$data.url[0] + this.$data.currentPage + this.$data.url[1];
            console.log(url);
            this.$data.loading = true;
            var timeid = setTimeout(()=>{
                if(!this.$data.loading)return;
                this.$data.loading = false;
                ElMessage.error("搜索超时...");
            },10000);
            scrollTo(0,0);
            axios.post(url,{"isAdvanced":"1"},{headers:{
                "Content-Type":"application/json",
            }}).
            then((response) => {
                console.log(response);
                clearTimeout(timeid);
                if(flag)this.init();
                this.$data.count = response.data.meta.count;
                this.$data.list = response.data.results;
                for(var i = 0; i < this.$data.list.length;i++){
                    var item = this.$data.list[i];
                    if(this.$data.selectedMap.has(item.id))item.selected = true;
                    var _keywords = [];
                    var _authors = [];
                    for(var j = 0; j < item.keywords.length;j++){
                        _keywords.push(item.keywords[j].keyword);
                        if(!this.$data.keywords[item.keywords[j].keyword])this.$data.keywords[item.keywords[j].keyword] = 1;
                        this.updateRecommends(item.keywords[j].keyword,this.$data.keywords[item.keywords[j].keyword]);
                    }
                    for(var j = 0; j < item.authorships.length;j++){
                        _authors.push(item.authorships[j].author.display_name);
                    }
                    this.$data.list[i]._keywords = _keywords;
                    this.$data.list[i]._authors = _authors;
                }
                if(flag)this.$data.fields = response.data.concepts_count;
                this.$data.loading = false;
            })
            .catch((error)  => {
                clearTimeout(timeid);
                this.$data.loading = false;

            });
            return;
        },
        gotoDetail(res){
            useWorkId().value = res.id;
            setLocal();
            let routeInfo = this.$router.resolve({ path: '/articledetail' });
            window.open(routeInfo.href, '_blank');
        },
        analyse(){
            useChartData().value = Array.from(this.$data.selectedMap.values)
            console.log(useChartData().value);
            // setLocal();
            // this.$router.push("/netforeassy");
        },
        selectAll(flag){
            for(var i = 0; i < this.$data.list.length; i++){
                this.select(this.$data.list[i],flag);
            }
            if(!flag)this.$data.selectedMap.clear();
        },
        selectWithField(field,flag){
            for(var i = 0; i < this.$data.list.length; i++){
                if(field == this.$data.list[i].concepts[0].display_name)this.select(this.$data.list[i],flag);
            }
        },
        select(res,flag){
            res.selected = flag;
            if(flag){
                var info = {
                    id: res.id,
                    title: res.display_name,
                    referenced_works: res.referenced_works,
                    related_works: res.related_works, 
                }
                this.$data.selectedMap.set(res.id,info);
            }
            else{
                this.$data.selectedMap.delete(res.id);
            }
        },
        init(){
            this.$data.keywords={};
            this.$data.recommends=[{keyword:"",count:0},{keyword:"",count:0},{keyword:"",count:0},{keyword:"",count:0},{keyword:"",count:0},];
        },
        search(info){
            emitter.emit('search', info);
        },
        updateRecommends(keyword,count){
            var i = 0;
            for(i = 0; i < 5;i++){
                if(keyword == this.$data.recommends[i].keyword){
                    if(this.$data.recommends[i].count >= count)return;
                }
            }
            for(i = 0; i < 5;i++){
                if(count >= this.$data.recommends[i].count){
                    if(keyword == this.$data.recommends[i].keyword){
                        this.$data.recommends[i].count = count;
                        return;
                    }
                    break;
                }
            }
            var k;
            for(k = i+1; k < 5;k++){
                if(keyword == this.$data.recommends[k].keyword)break;
                
            }
            var j = i;
            for(i = k - 1;i>j;i--){
                this.$data.recommends[i] = this.$data.recommends[i-1];
            }
            
            if(j == 5)return;
            this.$data.recommends[j]={keyword:keyword,count:count};
        },
        handleCurrentChange(val) {
            this.$data.currentPage = val; 
            this.getResults(false);
        },
        visible(index){
            return parseInt(index/perPage) == (this.$data.currentPage - 1);
        },
        display(item){
            for(let filterProp of filterProps){
                var rset = item[filterProp];
                var flag = false;
                for(let filter of this.$data.checkedFilter[filterProp]){
                    if(rset.has(filter)){
                        flag = true;
                        break;
                    }
                }
                if(!flag)return false;
            }
            return true;
        },
        getAllFilterInfo(){
            for(let filterProp of filterProps){
                const set = new Set();
                for(let res of this.$data.list){
                    var rlist = res[filterProp];
                    for(let item of rlist){
                        if(!set.has(item))set.add(item);
                    }
                }
                this.$data.filter[filterProp] = [];
                this.$data.checkedFilter[filterProp] = [];
                for(let v of set){
                    this.$data.filter[filterProp].push(v);
                    this.$data.checkedFilter[filterProp].push(v);
                }
            }
        }
    }
    
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mid{
    margin-top:20px;
}
.more{
    justify-content: right;
    text-align: right;
    color:inherit;
}
.prop{
    font-size:16px;
    width:100px;
    font-weight: 550;
}
.result-display{
    margin-left:20px;
}
.item{
    border-radius: 5px;;
    border: 2px solid rgb(195, 195, 195);
    margin-top:20px;
    display: flex;
    align-items:stretch;
}
.item:hover {
    border: 2px solid rgb(68, 126, 219);
}
.recommend-row{
    min-height:30px;
    color:black;
}

.recommend-row:hover{
    background-color: rgba(226, 245, 255, 0.44);
    font-weight: bold;
    user-select:none;
    color:#2d96fe;
}
.more:hover{
    background-color: rgba(226, 245, 255, 0.44);
    font-weight: bold;
    user-select:none;
    color:#1c8eff;
}
.recommend{
    display:block;
    color:inherit;
    font-size:16px;
}
.select-button{
    border-radius: 0px;
    float:left;
    height:inherit;
}
.space{
    height:20px;
}
.space2{
    height:300px;
}
.article{
    width: 100%;
    border-radius: 0px;
    overflow: hidden;
    text-align: left;
}
.article:hover{
    
    background-color: rgb(249, 249, 255);
}
.article-title{
    margin:10px 0 0 10px;
    line-height:40px;
    font-size:24px;
    font-weight: bold;
}
.article-abstract, .article-key-word{
    margin:10px 0 0 10px;
    font-size:16px;
    line-height: 25px;
}
.article-else{
    margin:10px 0 10px 10px;
    font-size:13px;
}
.min-height{
    min-height: 720px;
}
.tag{
    float: right;
    margin-top: -30px;
    margin-right: -20px;
    font-size: 13px;
}
.tag-color{
    transform: skewX(+15deg);
    padding: 5px 30px 5px 20px;
    margin-top: 0;
    height: inherit;
}
.tag-content{
    position: relative;
    z-index: 100;
    margin-left:5px;
    margin-top: -25px;
}
.subtag:nth-child(1) > .tag-color{
    margin-right:-4px;
    background-color: rgba(100, 198, 255, 0.6);

}
.subtag:nth-child(2) > .tag-color{
    background-color: rgba(82, 238, 255, 0.6);

}
.subtag:nth-child(3) > .tag-color{
    background-color: rgba(95, 255, 226, 0.6);

}
.subtag{
    float:right;
    background-color: rgba(0, 0, 0, 0);
}
.filter{
    margin-left:40px;
    position:absolute;
    width:240px;
    color:black;
    scroll-margin-bottom:400px;
}
.filter-title{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    text-align: center;
    justify-content: center;
    margin-top: 5px;
    font-size:18px;
}
.filter-option{
    margin-left:10px;
    text-align: left;
}
.el-pagination{
    justify-content: center;
    text-align: center; 
}
.field{
    margin-top:5px;
    font-size:18px;
    height:30px;
}
.field-button{
    margin-top:4px;
    margin-right:5px;
}
.field-button:hover{
    margin-top:5px;
    color:blue;
}
.select-num{
    position: absolute;
    margin-top:-55px;
}
.aside-back{
    z-index:-1;
    margin-top:-190px;
    position: relative;
    background-color: rgba(226, 245, 255, 0.214);
}
</style>
  
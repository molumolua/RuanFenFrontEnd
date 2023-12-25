<template>
<div>
<el-card  class="search-bar">
    <el-row class="row-40">
    <el-col :span="23">
    <el-autocomplete placeholder="请输入内容" v-model="input" value-key="display_name"
    :popper-append-to-body="false"
    popper-class="match-list"
    :fetch-suggestions="querySearchAsync" class="input-with-select">
      <template #prepend>
      <el-popover
      placement="bottom-start"
      width="500"
      trigger="click">
      <div>
        <el-form :model="form" label-width="175px" class="search-detail-form" size="large">
          <el-form-item label="显示以下作者所著的文章:">
            <el-input v-model="form.author"></el-input>
          </el-form-item>
          <el-form-item label="显示以下刊物发表的文章:">
            <el-input v-model="form.periodical"></el-input>
          </el-form-item>
          <el-form-item label="显示以下时间发表的文章:">
              <el-date-picker
                v-model="form.timespan"
                value-format="YYYY-MM-DD"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="——"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                :shortcuts="shortcuts">
              </el-date-picker>
          </el-form-item>
        </el-form>
        
      </div>
      <template #reference>
        <el-button>高级搜索</el-button>
      </template>
    </el-popover>
</template>

    <template #append class="search-button">
        <el-button type="success" :icon="Search" @click="onSubmit()" id="search-button"/>
    </template>
    </el-autocomplete>
  </el-col></el-row>
  <el-row class="search-tag-row">
    <template v-for="(v,key) in form">
    <el-tag 
      class="search-tag"
      v-if="v"
      :key="key"
      :disable-transitions="false"
      closable
      @close="handleClose(key)">
      {{label[key]}} : {{v}}
    </el-tag>
    </template>
  </el-row>
  </el-card>
  <el-row class="filter-row">
    <el-col :offset="12" :span="4" class="filter-title"></el-col>
    <el-col :span="4">
        <el-select v-model="selectedSortKey" 
        @change="onSubmit()"
        size="large">
            <el-option
              v-for="item in sortKey"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
    </el-col>
    <el-col :span="4">
        <el-select v-model="selectedSortOrder" 
        @change="onSubmit()"
        size="large">
            <el-option
              v-for="item in sortOrder"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
    </el-col>
</el-row>
</div>
</template>
<script setup>
import axios from 'axios';
import { perPage } from './ResultList.vue';
import {
  Search,
} from '@element-plus/icons-vue'

import { ElMessage } from 'element-plus'
import emitter from '~~/plugins/event-bus.client';
</script>
<script>
const shortcuts = [
    {
      text: '最近一个月',
      value: () => {
        const end = new Date();
        const start = new Date(new Date() - 1000 * 60 * 60 * 24 * 30);
        return [start, end];
      },
    },
    {
      text: '最近半年',
      value: () => {
        const end = new Date();
        const start = new Date(new Date() - 1000 * 60 * 60 * 24 * 180);
        return [start, end];
      },
    },
    {
      text: '今年至今',
      value: () => {
        const end = new Date();
        const fullYear = new Date().getFullYear();
        const start = new Date(fullYear, 0, 1);
        return [start, end];
      },
    }];
export default{
    data(){
        return {
            cnt:0,
            input:"",
            ascendNumber:0,
            label:{
                author:"作者",
                periodical:"期刊",
                timespan:"时间",
            },
            form: {
                author:"",
                periodical:"",
                timespan:"",
            },
            selectedSortKey:"relevance_score",
            sortKey:[{
                value:"publication_year",
                label:"发布时间",
            },{
                value:"relevance_score",
                label:"相关度",
            },{
                value:"cited_by_count",
                label:"引用量",
            },],
            selectedSortOrder:"desc",
            sortOrder:[{
                value:"desc",
                label:"降序",
            },{
                value:"asc",
                label:"升序",
            }],
            shortcuts:shortcuts,
        }
    },
    mounted() { 
        emitter.on('search',(content)=>{
            if(this.cnt==0){
                this.cnt = 1;
                if(this.$data.input == content)return;
                this.$data.input = content;
                this.onSubmit();
                this.cnt = 0;
            }
        })
    },
    methods:{
        querySearchAsync(queryString, cb) {
            var cur = ++this.$data.ascendNumber;
            axios.get("https://api.openalex.org/autocomplete/works?q="+queryString).
            then((response) => {
                if(this.ascendNumber != cur)return;
                var array = response.data.results;
                cb(array);
            })
            .catch((error)  => {
                console.log(error);
            });
        },
        handleClose(key){
            this.$data.form[key]="";
        },
        onSubmit() {
            if(!this.$data.input){
                ElMessage.error('Please enter something~');
                return;
            }
            var search = this.$data.input;
            var from_publication_date = "1970-01-01";
            if(this.$data.form.timespan[0])from_publication_date = this.$data.form.timespan[0];
            var to_publication_date = "2023-12-25"
            if(this.$data.form.timespan[1])to_publication_date = this.$data.form.timespan[1];
            var author = this.$data.form.author;
            var concept = ""
            var sort = this.$data.selectedSortKey+":"+this.$data.selectedSortOrder;
            var url1 = "http://121.36.19.201/api/get_works/?" +
            "filter=from_publication_date:"+from_publication_date+",to_publication_date:"+to_publication_date+
            (author?",authorships.author.display_name:"+author:"")+
            (concept?",concepts.display_name:"+concept:"")+
            "&page=";
            var url2 = "&per_page="+perPage+
            "&search="+search+"&sort="+sort;
            var url = [url1,url2];
            emitter.emit('search-url', url);
        }
    }
}
</script>

<style scoped>
.search-bar{
    overflow: visible;
    text-align: left;
    position: relative;
    left:20%;
    width:70%;
    margin-top:20px;
    margin-bottom:20px;
}
#search-button{
    width:80px;
    border-radius: 0px 4px 4px 0px;
    color:white;
}
.search-detail-form > *{
    margin:0;
    padding:0;
}
:deep(.input-with-select){
    margin-left:20px;
    height:50px;
    width:100%;
    border-radius: 0px 0px 0px 0px;
}
:deep(.input-with-select > *){
    font-size:16px;
    height:50px;
}
:deep(.el-input-group__append){
    background-color: #409EFF;
}
.center{
    text-align: center;
}
.bold-font{
    font-weight: bold;
}
.icon{
    margin-top:5px;
    margin-left: 25px;;
    text-align: left;
}
.filter-title{
    margin-top: 5px;
    font-size:18px;
}
.filter-row{
    margin-top: 30px;
}
.search-tag-row{
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
}
.search-tag{
    margin-right:10px;
}
:deep(.match-list > div > div){
    max-height:500px !important;
}
</style>
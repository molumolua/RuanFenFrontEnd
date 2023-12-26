<template class="main">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-checkbox-group v-model="checkList">
        <template v-for="col in collection">
        <el-collapse-item :name="col.id">
        <template #title>
            <el-row>
                <el-col :span="20" class="name">{{ col.name }}</el-col>
                <el-col :span="4" class="check"><el-checkbox :label="col" @click="stopCollapse" :disable="isDisable(col.articles.works)" class="fuck"/></el-col>
            </el-row>
        </template>
        <el-row v-if="col.articles.works.length + col.articles.analysis.length <=0" class="mid">(空)</el-row>
        <el-row v-for="item in col.articles.works" class="item">
            <el-col :span="20" class="title" @click="gotoDetail(item.work)">{{ (item.work.display_name?item.work.display_name:"NULL") + " ("+item.work.open_alex_id+")" }}</el-col>
            <el-col :span="4"><el-button type="danger" :icon="Delete" @click="removeWork(item,col)" class="delete-button"/></el-col>
        </el-row>
        <el-row v-for="item in col.articles.analysis" class="item">
            <el-col :span="20">{{ item.analysis.display_name }}</el-col>
            <el-col :span="4" class="title"><el-button type="danger" :icon="Delete" @click="" class="delete-button" /></el-col>
        </el-row>
        </el-collapse-item>
        </template>
    </el-checkbox-group>
    </el-collapse>
</template>
<script setup>
import axios from 'axios';
import emitter from '~~/plugins/event-bus.client';
import {
    Delete,
} from '@element-plus/icons-vue'
const props = defineProps(['collection','token']);
</script>
<script>
    export default {
        data(){
            return{
                activeNames:[],
                checkList:[],
            }
        },
        methods:{
            test(){
                console.log(this.collection);
            },
            gotoDetail(res){
                console.log(res);
                useWorkId().value = "https://openalex.org/" + res.open_alex_id;
                useWorkName().value = res.display_name
                setLocal();
                location.reload();
            },
            addCollect(){
                for(let item of this.checkList){
                    console.log(item);
                    item.articles.works.push({
                        work:{
                            id:useWorkId().value,
                            display_name:useWorkName().value,
                            open_alex_id:'W'+useWorkId().value.split("W")[1],
                        }
                        }
                        );
                }
                this.checkList = [];
            },
            stopCollapse(e){
                return e.stopPropagation()
            },
            isDisable(works){
                var flag = false;
                for(let item of works){
                    console.log(useWorkId().value,item.id)
                    if(useWorkId().value == item.id){
                        flag = true;
                    }
                }
                return flag;
            },
            removeWork(item,col){
                col.articles.works = col.articles.works.filter(item1 => item1 !== item);
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+ this.token,
                };
                var data = {
                    work_id:item.work.id,
                }
                axios.post(
                    "http://121.36.19.201/api/removeCollectionItem/",data,{headers}).then((response) => {
                        console.log(response);
                    }).catch((error)=>{
                    console.log(error);
                    
                });
            },
        },
        mounted(){
            emitter.on('confirm',()=>{
                this.addCollect();
            });
        },
    }
</script>
<style scoped>
:deep(*){
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    
    white-space: nowrap;
    font-size:20px;
}
.mid{
    text-align: center;
    justify-content: center;
}
.item{
    border-top:1px solid rgba(187, 187, 187, 0.507);
    justify-content: center;;
    height:50px;
}
.delete-button{
    margin-top:10px;
}
.title{
    margin-top:10px;
    font-size:20px;
}
.check{
    overflow: hidden;
    margin-top:-60px;
    margin-left:480px;
}
.name{
    text-align: left;;
    font-size:20px;
}
.fuck{
    color:transparent !important;
    font-size:6px;
}
:deep(.el-checkbox__label){
    color:transparent;

}
</style>

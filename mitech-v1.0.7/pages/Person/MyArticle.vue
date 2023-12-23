<template>
    <div class="myart1">
        <article-item/>
        <article-item/>
        <article-item/>
        <article-item/>
        <article-item/>
    </div>
  </template>
  
<script>
import ArticleItem from '../../components/Paper_1.vue';
export default {
components: {ArticleItem},
name: "myarticle",
data() {
    return {
    allData:[]
    };
},
methods: {
},
};
</script>

<style>
.myart1{
    line-height: 30px;
}
</style>

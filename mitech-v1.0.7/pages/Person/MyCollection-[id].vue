<template>
    <div class="myart1">
        <div v-for="paper in papers" :key="paper.work.id">
            <article-item :paper="paper"/>
        </div>
    </div>
</template>

<script>
import ArticleItem from '../../components/Paper.vue';
import axios from 'axios';
export default {
    components: {ArticleItem},
    name: "mycollection",
    data() {
        return {
            papers:[]
        };
    },
    mounted() {
        getLoacl()
        this.load()
    },
    methods: {
        async load() {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
      await axios.get('http://121.36.19.201/api/getCollectionPackageContents/' + this.$route.params.id, { headers }).then((response) => {
        console.log(response.data);
        this.papers = response.data.works
      }).catch((error) => {
        console.log(error);
      })
    },
    },
};
</script>

<style>
.myart1{
    line-height: 30px;
}
</style>

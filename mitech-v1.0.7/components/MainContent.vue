<template>
    <div class="cybersecurity-hero">
        <div class="container">
            <div class="processing-hero-bg__color">
                
                <div class="col-lg-10 col-md-10">
                    <div class="modern-it-company-hero-text wow move-up">
                        <h1 class="heading">Illuminate your research journey with <mark class="text-color-primary">Scholight</mark></h1>
                        <div class="book-box ptbox">
                            <div class="image ptbox">
                                <img src="/images/icons/green-curve-arrow.png" class="img-fluid" alt="arrow icon">
                            </div>
                            <form id="contact-form">
                                <div class="modern-it-company-contact-form-hero">
                                                <el-autocomplete placeholder="请输入内容" v-model="input" value-key="display_name"
                                                :popper-append-to-body="false"
                                                popper-class="match-list"
                                                :fetch-suggestions="querySearchAsync" class="input-with-select">
                                                <template #append>
                                                    <nuxt-link to="/search">
                                                        <el-button :icon="Search" @click="search()" id="search-button"/>
                                                    </nuxt-link>
                                                </template>
                                                </el-autocomplete>
                                                <!-- <button type="submit" class="search-submit" @click="search()">
                                                    <span class="search-btn-icon fa fa-search"></span>
                                                </button> -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-5">
                    <div class="cybersecurity-hero-images-wrap wow move-up">
                        <div class="cybersecurity-hero-images section-space">
                            <div class="inner-img-one relative-world">
                                <img class="img-fluid worldRotate" src="/images/hero/mitech-slider-cybersecurity-global-image.png" alt="image">
                            </div>
                            <!-- <div class="inner-img-two">
                                <img class="img-fluid ml-xl-5" src="/images/hero/slider-cybersecurity-slide-01-image-01.png" alt="image">
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import MainDisplay from "@/components/MainDisplay.vue";
import axios from "axios"
import {
  Search,
} from '@element-plus/icons-vue'
</script>
<script>
export default {
    components: { 
        MainDisplay 
    },
    mounted() {

    },
    data(){
        return {
            ascendNumber:"",
            input:""
        }
    },
    methods:{
        querySearchAsync(queryString, cb) {
            var cur = ++this.$data.ascendNumber;
            axios.get("https://api.openalex.org/autocomplete/works?q="+queryString).
            then((response) => {
                if(this.ascendNumber != cur)return;
                var array = response.data.results;
                cb(array.slice(0,5));
            })
            .catch((error)  => {
                console.log(error);
            });
        },
        search(){
            useSearchWord().value=this.input;
            setLocal();
            // this.$router.push("/Search");
        }
    }
}
</script>

<style lang="scss" scoped>
.ptbox{
    padding-top: 5px;
}
.relative-world{
    position: relative;
    left:830px;
    bottom: 480px;
    z-index: 0;
    pointer-events:none;
}
:deep(.input-with-select){
    margin-left:20px;
    height:70px;
    width:90%;
    border-radius: 0px 0px 0px 0px;
}
:deep(.input-with-select > *){
    font-size:16px;
    height:70px;
}
#search-button{
    width:80px;
    border-radius: 0px 8px 8px 0px;
    color:white;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    z-index:100000;
}
:deep(.el-input-group__append){
    background-color: #409EFF;
}
:deep(.el-input-group__append > a){
    margin-top:-5px;
}
</style>
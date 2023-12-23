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
                                    <div class="row">
                                        <div class="col-lg-10">
                                            <div class="widget-search">
                                                <input type="text" placeholder="Enter search keyword">
                                                <button type="submit" class="search-submit">
                                                    <span class="search-btn-icon fa fa-search"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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
<script>
import MainDisplay from "@/components/MainDisplay.vue";
import axios from "axios"
export default {
    components: { 
        MainDisplay 
    },
    mounted() {

    },
    data(){
        return {
        }
    },
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
}
</style>
<template>
    <div class="about-resources-wrapper" :style="{ backgroundImage: `url('/images/bg/mitech-slider-cybersecurity-global-image.png')` }">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 order-2 order-lg-1">
                    <div class="resources-left-box">
                        <div class="resources-inner">
                            <h6 class="sub-title mb-20">{{ data.ctaFour.subTitle }}</h6>
                            <h3 class="heading" v-html="data.ctaFour.title"></h3>
                            <div class="button mt-30">
                                <button class="ht-btn ht-btn-md">Download now (3MB)</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2">
                    <div class="resources-right-box">
                        <div class="resources-right-inner text-center">
                            <div class="resources-images">
                                <img class="img-fluid" :src="data.ctaFour.image" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/cta.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
<template>
    <div class="gradation-process-area section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="gradation-title-wrapper section-space--mb_60">
                        <div class="gradation-title-wrap ">
                            <h6 class="section-sub-title text-black mb-20">{{ data.fourSteps.sectionSubTitle }}</h6>
                            <h4 class="heading" v-html="data.fourSteps.sectionTitle"></h4>
                        </div>
                        <div class="gradation-sub-heading">
                            <h3 class="heading" v-html="data.fourSteps.heading"></h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="ht-gradation style-01">
                        <div class="item animate wow fadeInRight" data-wow-delay="0.1s" v-for="step in data.fourSteps.steps" :key="step.id">
                            <div class="line"></div>
                            <div class="circle-wrap">
                                <div class="mask">
                                    <div class="wave-pulse wave-pulse-1"></div>
                                    <div class="wave-pulse wave-pulse-2"></div>
                                    <div class="wave-pulse wave-pulse-3"></div>
                                </div>
                                <h6 class="circle">{{ step.count }}</h6>
                            </div>
                            <div class="content-wrap">
                                <h6 class="heading">{{ step.heading }}</h6>
                                <div class="text">{{ step.text }}</div>
                                <nuxt-link to="/about" class="gradation-btn">
                                    <span class="button-text" data-text="Look more">Look more</span>
                                    <span class="button-icon fas fa-arrow-right ms-1"></span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
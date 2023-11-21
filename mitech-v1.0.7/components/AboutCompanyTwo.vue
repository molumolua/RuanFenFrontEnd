<template>
    <div class="feature-large-images-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20">{{ data.aboutCompanyTwo.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.aboutCompanyTwo.sectionTitle"></h3>
                    </div>
                </div>
            </div>

            <div class="cybersecurity-about-box section-space--pb_70">
                <div class="row">
                    <div class="col-lg-4 offset-lg-1">
                        <div class="modern-number-01">
                            <h2 class="heading mr-5">
                                <span class="mark-text">{{ data.aboutCompanyTwo.headingMarkText }}</span>{{ data.aboutCompanyTwo.heading }}
                            </h2>
                            <h6 class="heading mt-30">{{ data.aboutCompanyTwo.subHeading }}</h6>
                        </div>
                    </div>

                    <div class="col-lg-5 offset-lg-1">
                        <div class="cybersecurity-about-text">
                            <div class="text">{{ data.aboutCompanyTwo.desc }}</div>
                            <div class="button-text">
                                <nuxt-link to="" class="btn-text">
                                    Discover now
                                    <span class="button-icon ml-1">
                                        <i class="fas fa-arrow-right ms-1"></i>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="feature-images__six">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 wow move-up" v-for="about in data.aboutItems" :key="about.id">
                                <div class="ht-box-images style-06">
                                    <div class="image-box-wrap">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fulid" :src="about.icon" alt="icon">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">{{ about.heading }}</h5>
                                            <div class="text">{{ about.desc }}</div>
                                            <nuxt-link to="" class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="fas fa-arrow-right ms-1"></i>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_60">
                        {{ data.aboutCompanyTwo.underHeading }}
                        <nuxt-link to="/contact">{{ data.aboutCompanyTwo.linkText }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/about.json';
    
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
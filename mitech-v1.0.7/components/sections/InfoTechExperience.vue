<template>
    <div class="section-space--ptb_100 infotechno-section-bg-01" :style="{ backgroundImage: `url('/images/patterns/mitech-home-infotechno-section-company-bg.png')` }">
        <div class="our-experience-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <AboutCompany :aboutData="about.aboutCompany" />
                    </div>

                    <div class="col-lg-5 ms-auto">
                        <div class="ht-list style-auto-numbered-02">
                            <div class="list-item" v-for="item in about.items" :key="item.id">
                                <nuxt-link to="/about" class="link">
                                    <div class="list-header">
                                        <div class="marker">{{ item.no }}</div>
                                        <div class="title-wrap">
                                            <h6 class="title">{{ item.title }}</h6>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="feature-large-images-wrapper section-space--pt_100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle class="text-center section-space--mb_30" :title="data.featureSectionTitle" :subTitle="data.featureSectionSubTitle" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row row--35">
                            <div class="col-lg-4 col-md-6 mt-30" v-for="service in data.services.slice(23, 26)" :key="service.id">
                                <FeatureItem :service="service" />
                            </div>
                        </div>
                        <div class="section-under-heading text-center section-space--mt_40">
                            <nuxt-link to="/about">
                                Learn more about how we work span 
                                <i class="ms-1 button-icon fas fa-arrow-right ms-1"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';
    import about from '../../data/about.json'

    import SectionTitle from '@/components/SectionTitle';
    import AboutCompany from '@/components/AboutCompany';
    import FeatureItem from '@/components/FeatureItem';
    export default {
        components: {
            SectionTitle,
            AboutCompany,
            FeatureItem
        },
        data () {
            return {
                data,
                about
            }
        },
    };
</script>

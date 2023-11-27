<template>
    <div class="projects-wrapper projectinfotechno-bg section-space--ptb_100" :style="{ backgroundImage: `url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_40" :title="data.sectionTitle" :subTitle="data.sectionSubTitle" />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="projects-wrap">
                        <swiper
                            :space-between="30"
                            :speed="1000"
                            :loop="false"
                            :breakpoints="swiperOptions.breakpoints"
                            :pagination="swiperOptions.pagination"
                        >
                            <swiper-slide v-for="project in data.projects" :key="project.id">
                                <CaseStudiesItem :project="project" />
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-project mt_20 text-center"></div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_40">
                        {{ data.underHeading }}
                        <nuxt-link to="/">Take the challenge!</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

    import data from '../../data/caseStidies.json';
    export default {
        components: {
            Swiper,
            SwiperSlide,
            SectionTitle: () => import("@/components/SectionTitle"),
            CaseStudiesItem: () => import("@/components/CaseStudiesItem"),
        },
        data () {
            return {
                data,
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination-project',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },

                        575:{
                            slidesPerView : 1
                        }
                    }
                },
            }
        }
    };
</script>
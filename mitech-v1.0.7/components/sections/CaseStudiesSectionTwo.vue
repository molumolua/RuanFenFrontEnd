<template>
    <div class="service-projects-wrapper section-space--pt_100 mb-20">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20">{{ data.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.sectionTitle"></h3>
                    </div>
                </div>
            </div>
            <div class="service-slider__project-active">
                <div class="service-slider__project">
                    <swiper
                        :speed="1000"
                        :loop="false"
                    >
                        <swiper-slide v-for="project in data.projectsTwo" :key="project.id">
                            <div class="row">
                                <div class="slide-content col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <div class="service-project-slide-info">
                                        <h4 class="heading font-weight--reguler mb-10">{{ project.heading }}</h4>
                                        <p class="sub-text text-color-primary">{{ project.category }}</p>
                                        <div class="text">{{ project.desc }}</div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-7 order-1 order-lg-2">
                                    <div class="slide-image">
                                        <div class="image-wrap">
                                            <div class="image">
                                                <img class="img-fluid" :src="project.image" :alt="project.alt">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import data from '../../data/caseStidies.json';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data () {
            return {
                data
            }
        }
    };
</script>
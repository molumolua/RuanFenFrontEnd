<template>
    <div class="projects-wrapper section-space--pb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_60">
                        <h2 class="heading">We stand out for some reasons.</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="projects-wrap swiper-container projects-slider__three">
                        <swiper
                            :space-between="30"
                            :speed="1000"
                            :loop="true"
                            :breakpoints="swiperOptions.breakpoints"
                            :pagination="swiperOptions.pagination"
                        >
                            <swiper-slide v-for="project in projects" :key="project.id">
                                <a href="#" class="projects-wrap style-3 wow move-up">
                                    <div class="projects-image-box">
                                        <div class="projects-image">
                                            <img class="img-fluid" :src="project.imageSrc" :alt="project.title">
                                            <div class="project-logo">
                                                <img :src="project.imgLogo" :alt="project.imgLogo">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">
                                                {{ project.title }}
                                            </h5>
                                        </div>
                                    </div>
                                </a>
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-black swiper-pagination-project text-center mt_20"></div>
                    </div>

                    <div class="section-under-heading text-center section-space--mt_40">
                        Never underestimate your potentials. <a href="#">It all started here.</a>
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

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination-black',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },
                        576:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                },
                projects: [
                    {
                        id: 1,
                        imageSrc: "/images/projects/success-client-01.jpg",
                        imgLogo: "/images/icons/home-reputable-success-client-logo-01.webp",
                        title: "Attentive and positive attitude builds great career environment",
                        link: "/"
                    },
                    {
                        id: 2,
                        imageSrc: "/images/projects/success-client-02.jpg",
                        imgLogo: "/images/icons/home-reputable-success-client-logo-02.webp",
                        title: "Professional consulting with reasonable budgeting strategies",
                        link: "/"
                    },
                    {
                        id: 3,
                        imageSrc: "/images/projects/success-client-03.jpg",
                        imgLogo: "/images/icons/home-reputable-success-client-logo-04.webp",
                        title: "Precise projection of risks and potentials via advanced tools",
                        link: "/"
                    }
                ]
            }
        }
    };
</script>
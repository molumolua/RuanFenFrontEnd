<template>
    <div class="testimonial-slider-area section-space--ptb_120 bg-gray-3">
        <div class="container-fluid container-fluid--cp-80">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_60" :title="data.sectionTitle" :subTitle="data.sectionSubTitle" />
                    <div class="testimonial-slider">
                        <div class="testimonial-slider__container-two">
                            <div class="testimonial-slider__wrapper">
                                <swiper
                                    :space-between="30"
                                    :speed="1000"
                                    :loop="true"
                                    :centered-slides="true"
                                    :breakpoints="swiperOptions.breakpoints"
                                    :pagination="swiperOptions.pagination"
                                >
                                    <swiper-slide v-for="testimonial in data.testimonials" :key="testimonial.id">
                                        <div class="testimonial-slider__single wow move-up">
                                            <h6 class="testimonial-subject">{{ testimonial.subject }}</h6>
                                            <div class="testimonial-slider__text">
                                                {{ testimonial.desc }}
                                            </div>
                                            <div class="author-info">
                                                <div class="testimonial-slider__media">
                                                    <img :src="testimonial.thumb" class="img-fluid" alt="author thumbnail">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">{{ testimonial.name }}</h6>
                                                    <span class="designation">{{ testimonial.designation }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-t0 section-space--mt_40 text-center"></div>
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

    import data from '../../data/testimonial.json';
    export default {
        components: {
            Swiper,
            SwiperSlide,
            SectionTitle: () => import("@/components/SectionTitle"),
        },
        data () {
            return {
                data,
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination-t0',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
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
<template>
    <div class="testimonial-slider-area section-space--ptb_120 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <SectionTitle class="text-center section-space--mb_60" :title="data.sectionTitle" :subTitle="data.sectionSubTitle" />
                    <div class="testimonial-slider">
                        <div class="testimonial-slider__container">
                            <div class="testimonial-slider__wrapper">
                                <swiper
                                    :space-between="30"
                                    :speed="1000"
                                    :loop="false"
                                    :breakpoints="swiperOptions.breakpoints"
                                    :pagination="swiperOptions.pagination"
                                >
                                    <swiper-slide v-for="testimonial in data.testimonials" :key="testimonial.id">
                                        <div class="testimonial-slider__one wow move-up">
                                            <div class="testimonial-slider--info">
                                                <div class="testimonial-slider__media">
                                                    <img :src="testimonial.thumb" class="img-fluid" alt="client thumbnail">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <div class="testimonial-rating">
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                    </div>
                                                    <div class="author-info">
                                                        <h6 class="name">{{ testimonial.name }}</h6>
                                                        <span class="designation">{{ testimonial.designation }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="testimonial-slider__text">{{ testimonial.desc }}</div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-t01 section-space--mt_30 text-center"></div>
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
                        el: '.swiper-pagination-t01',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 2
                        },

                        320:{
                            slidesPerView : 1
                        }
                    }
                },
            }
        }
    };
</script>
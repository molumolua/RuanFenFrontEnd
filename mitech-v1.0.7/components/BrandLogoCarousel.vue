<template>
    <div class="brand-logo-slider-area section-space--ptb_60">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-logo-slider__container-area">
                        <div class="brand-logo-slider__container">
                            <div class="brand-logo-slider__one">
                                <swiper
                                    :space-between="30"
                                    :speed="1000"
                                    :loop="false"
                                    :autoplay="{'delay': 3000}"
                                    :breakpoints="swiperOptions.breakpoints"
                                >
                                    <swiper-slide class="brand-logo brand-logo--slider" v-for="logo in data.logoList" :key="logo.id">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img :src="logo.image" class="img-fluid" alt="logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img :src="logo.hoverImage" class="img-fluid" alt="logo">
                                            </div>
                                        </nuxt-link>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Autoplay} from 'swiper/core';
    SwiperCore.use([Autoplay]);

    import data from '../data/brandLogo.json';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data () {
            return {
                data,
                swiperOptions: {
                    breakpoints: {
                        1499:{
                            slidesPerView : 6
                        },

                        991:{
                            slidesPerView : 4
                        },

                        767:{
                            slidesPerView : 3

                        },

                        320:{
                            slidesPerView : 2
                        }
                    }
                },
            }
        }
    };
</script>
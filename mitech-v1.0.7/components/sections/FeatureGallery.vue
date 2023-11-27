<template>
    <div class="feature-images-wrapper position-relative">
        <div class="service-slider__container">
            <div class="service-slider__wrapper feature-images__three">
                <swiper
                    :speed="1000"
                    :loop="false"
                    :breakpoints="swiperOptions.breakpoints"
                >
                    <swiper-slide v-for="service in data.services.slice(32, 37)" :key="service.id">
                        <FeatureItemTwo :service="service" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import data from '../../data/service.json';

    import FeatureItemTwo from '@/components/FeatureItemTwo';
    export default {
        components: {
            Swiper, 
            SwiperSlide,
            FeatureItemTwo,
        },
        data () {
            return {
                data,
                swiperOptions: {
                    breakpoints: {
                        1200:{
                            slidesPerView : 4
                        },
                        992:{
                            slidesPerView : 3
                        },
                        576:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        },
    };
</script>
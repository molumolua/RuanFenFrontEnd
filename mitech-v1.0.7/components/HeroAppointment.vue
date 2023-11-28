<template>
    <div class="appointment-hero-wrapper bg-cover section-space--ptb_120" :style="{ backgroundImage: `url(${data.heroAppointment.bgImg})` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="appointment-hero-wrap wow move-up">
                        <div class="appointment-hero-text">
                            <h6 class="text-white">{{ data.heroAppointment.subTitle }}</h6>
                            <h1 class="font-weight--reguler text-white mb-30" v-html="data.heroAppointment.title"></h1>
                            <div class="hero-button">
                                <div class="video-popup infotech-video-box">
                                    <a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="single-popup-wrap video-link">
                                        <div class="video-content">
                                            <div class="ht-popup-video video-button">
                                                <div class="video-mark">
                                                    <div class="wave-pulse wave-pulse-1"></div>
                                                    <div class="wave-pulse wave-pulse-2"></div>
                                                </div>
                                                <div class="video-button__two">
                                                    <div class="video-play">
                                                        <span class="video-play-icon"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="video-text">
                                                {{ data.heroAppointment.videoText }}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 me-auto me-auto col-md-6">
                    <AppointmentForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/hero.json';

    import AppointmentForm from '@/components/AppointmentForm';
    export default {
        components: {
            AppointmentForm
        },
        data () {
            return {
                data
            }
        }
    };
</script>
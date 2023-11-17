<template>
    <div class="feature-images-wrapper bg-gray section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_10">
                        <h6 class="section-sub-title mb-20">{{ data.serviceFour.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.serviceFour.sectionTitle"></h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="feature-images__two small-mt__10">
                        <div class="modern-grid-image-box row row--30">
                            <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60" v-for="service in data.services.slice(17, 23)" :key="service.id">
                                <ServiceItemStyleFour :service="service" />
                            </div>
                        </div>
                    </div>

                    <div class="section-under-heading text-center section-space--mt_60">
                        {{ data.serviceFour.underHeading }} 
                        <nuxt-link to="/">Take the challenge!</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    import ServiceItemStyleFour from '@/components/ServiceItemStyleFour';
    export default {
        components: {
            ServiceItemStyleFour,
        },
        data () {
            return {
                data
            }
        }
    };
</script>
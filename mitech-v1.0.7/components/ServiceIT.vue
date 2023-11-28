<template>
    <div class="feature-images-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center">
                        <h3 class="heading" v-html="data.serviceOne.sectionTitle"></h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="feature-images__one">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(0, 6)" :key="service.id">
                                <ServiceItem :service="service" />
                            </div>
                        </div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_60 section-space--pt_30">
                        {{ data.serviceOne.underHeading }} 
                        <nuxt-link to="/">Take the challenge!</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceItem from '@/components/ServiceItem';

    import data from '../data/service.json'

    export default {
        components: {
            ServiceItem,
        },
        data () {
            return {
                data
            }
        }
    };
</script>
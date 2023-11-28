<template>
    <div class="feature-icon-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_40" :title="data.serviceStyleTwo.sectionTitle" :subTitle="data.serviceStyleTwo.sectionSubTitle" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="feature-list__two">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(6, 12)" :key="service.id">
                                <ServiceItemStyleTwo :service="service" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="feature-list-button-box mt-30 text-center">
                        <nuxt-link to="/contact" class="ht-btn ht-btn-md">
                            Talk to a consultant
                        </nuxt-link>
                        <nuxt-link to="/contact" class="ht-btn ht-btn-md ht-btn--outline">
                            Contact us now
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    import SectionTitle from '@/components/SectionTitle';
    import ServiceItemStyleTwo from '@/components/ServiceItemStyleTwo';
    export default {
        components: {
            SectionTitle,
            ServiceItemStyleTwo
        },
        data () {
            return {
                data
            }
        }
    };
</script>
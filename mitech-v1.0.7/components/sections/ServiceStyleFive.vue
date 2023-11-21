<template>
    <div class="feature-icon-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_40">
                        <h6 class="section-sub-title mb-20">{{ data.serviceStyleTwo.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.serviceStyleTwo.sectionTitle"></h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="feature-list__one">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 wow move-up" v-for="service in data.services.slice(6, 14)" :key="service.id">
                                <ServiceItemStyleFive :service="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    import ServiceItemStyleFive from '@/components/ServiceItemStyleFive';
    export default {
        components: {
            ServiceItemStyleFive,
        },
        data () {
            return {
                data
            }
        }
    };
</script>

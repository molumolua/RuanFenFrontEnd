<template>
    <div class="feature-images-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_20">
                        <h6 class="section-sub-title mb-20">{{ data.serviceOne.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.serviceOne.sectionTitle"></h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="feature-images__five">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(29, 32)" :key="service.id">
                                <FeatureItemStyleThree :service="service" />
                            </div>
                        </div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_60">
                        Challenges are just opportunities in disguise.
                        <nuxt-link to="/">Take the challenge!</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    import FeatureItemStyleThree from '@/components/FeatureItemStyleThree';

    export default {
        props: ['service'],
        components: {
            FeatureItemStyleThree,
        },
        data () {
            return {
                data
            }
        }
    }
</script>
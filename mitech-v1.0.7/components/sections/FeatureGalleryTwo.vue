<template>
    <div class="feature-images-wrapper bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="feature-images__five resolutions-hero-bottom">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(29, 32)" :key="service.id">
                                <FeatureItemStyleThree :service="service" />
                            </div>
                        </div>
                    </div>

                    <div class="section-under-heading text-center section-space--mt_80">
                        Challenges are just opportunities in disguise.
                        <nuxt-link to="/contact">Take the challenge!</nuxt-link>
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
        components: {
            FeatureItemStyleThree,
        },
        data () {
            return {
                data
            }
        }
    };
</script>
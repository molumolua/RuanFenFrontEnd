<template>
    <div class="feature-large-images-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_30" :title="data.itSolutionTitle" :subTitle="data.itSolutionSubTitle" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row row--35">
                        <div class="col-lg-4 col-md-6 mt-30" v-for="service in data.services.slice(23, 29)" :key="service.id">
                            <FeatureItem :service="service" />
                        </div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_40">
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

    import SectionTitle from '@/components/SectionTitle';
    import FeatureItem from '@/components/FeatureItem';
    export default {
        components: {
            SectionTitle,
            FeatureItem,
        },
        data () {
            return {
                data
            }
        }
    };
</script>
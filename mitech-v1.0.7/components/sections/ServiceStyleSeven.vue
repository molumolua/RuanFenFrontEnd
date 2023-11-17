<template>
    <div class="feature-large-images-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_30" :title="data.featureSectionTitle" :subTitle="data.featureSectionSubTitle" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row row--35">
                        <div class="col-lg-4 col-md-6 mt-30" v-for="service in data.services.slice(23, 26)" :key="service.id">
                            <FeatureItem :service="service" />
                        </div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_40">
                        <nuxt-link to="/">
                            Learn more about how we work span 
                            <i class="ms-1 button-icon fas fa-arrow-right ms-1"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionTitle from '@/components/SectionTitle';
    import FeatureItem from '@/components/FeatureItem';

    import data from '../../data/service.json';
    export default {
        components: {
            SectionTitle,
            FeatureItem
        },
        data () {
            return {
                data
            }
        }
    };
</script>
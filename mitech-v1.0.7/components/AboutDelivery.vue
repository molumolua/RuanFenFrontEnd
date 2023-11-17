<template>
    <div class="about-delivering-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_20">
                        <h3 class="heading" v-html="data.aboutDelivery.sectionTitle"></h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6" v-for="delivery in data.aboutDelivery.deliveryItems" :key="delivery.id">
                    <div class="delivering-optimal-wrap">
                        <div class="list-item">
                            <div class="marker"></div>
                            <div class="title-wrap">
                                <h5 class="title">{{ delivery.title }}</h5>
                                <div class="desc">{{ delivery.desc }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/about.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
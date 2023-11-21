<template>
    <div class="feature-icon-wrapper section-space--ptb_80 border-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="feature-list__three">
                        <div class="row">
                            <div class="col-lg-6 wow move-up" v-for="service in data.services.slice(37, 41)" :key="service.id">
                                <div class="grid-item animate">
                                    <div class="ht-box-icon style-03">
                                        <div class="icon-box-wrap">
                                            <div class="content-header">
                                                <div class="icon">
                                                    <i :class="service.icon"></i>
                                                </div>
                                                <h5 class="heading">{{ service.heading }}</h5>
                                            </div>
                                            <div class="content">
                                                <div class="text">{{ service.desc }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
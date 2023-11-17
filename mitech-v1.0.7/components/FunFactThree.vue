<template>
    <div class="fun-fact-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-1">
                    <div class="modern-number-01 mr-5">
                        <h2 class="heading"><span class="mark-text">{{ data.funfactThree.markText }}</span>{{ data.funfactThree.subTitle }}</h2>
                        <h3 class="heading" v-html="data.funfactThree.title"></h3>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 wow move-up" v-for="item in data.funfactThree.funfacts" :key="item.id">
                            <div class="fun-fact--three text-center">
                                <div class="fun-fact__count counter">
                                    <span>{{ item.count }}</span>
                                </div>
                                <h6 class="fun-fact__text">{{ item.text }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import data from '../data/funfact.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
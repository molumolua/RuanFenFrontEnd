<template>
    <div class="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 wow move-up" v-for="item in data.funfactOne" :key="item.id">
                    <div class="fun-fact--two text-center">
                        <div class="fun-fact__count counter">
                            <span>{{ item.count }}</span>
                        </div>
                        <h6 class="fun-fact__text">{{ item.text }}</h6>
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
<template>
    <div class="fun-fact-wrapper">
        <div class="container">
            <div class="fun-fact-grid-4">
                <div class="grid-item wow move-up" v-for="item in data.funfactOne" :key="item.id">
                    <div class="fun-fact--one text-center">
                        <h5 class="fun-fact__title" v-html="item.title"></h5>
                        <div class="fun-fact__count counter">
                            <span>{{ item.count }}</span>
                        </div>
                        <span class="fun-fact__text">{{ item.text }}</span>
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
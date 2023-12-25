<template>
    <div class="content">
        <div class="ht-box-icon style-02 single-svg-icon-box">
            <div class="icon-box-wrap">
                <div class="content">
                    <h5 class="heading">{{ title }}</h5>
                    <div class="text">
                        {{ other }}
                    </div>
                    <div class="feature-btn">
                        <nuxt-link :to="`/paper-check/${ id }`" @click="handle()">
                            <!-- <span @click="handle()"> -->
                                <span class="button-text">Discover now</span>
                                <i class="fas fa-arrow-right ms-1"></i>
                            <!-- </span> -->
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceItemStyleTwo from '@/components/ServiceItemStyleTwo';
export default {
    components: {
        ServiceItemStyleTwo
    },
    props: {
        title: {
            type: String
        },
        other: {
            type: String
        },
        id: {
            type:Number
        },
        url: {
            type: String
        }
    },
    methods: {
        handle() {
            useCheck().value = this.url
            setLocal()
        }
    }
};
</script>

<style scoped>
.content {
    width: 200px;
}
</style>
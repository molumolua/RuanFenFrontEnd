<template>
    <div class="ht-box-icon style-02 single-svg-icon-box">
        <div class="icon-box-wrap">
            <div class="icon">
                <div class="svg-icon">
                    <img :src="service.icon" alt="icon">
                </div>
            </div>
            <div class="content">
                <h5 class="heading">{{service.heading }}</h5>
                <div class="text">
                    {{ service.desc }}
                </div>
                <div class="feature-btn">
                    <nuxt-link :to="`/service/${service.slug}`">
                        <span class="button-text">Discover now</span>
                        <i class="fas fa-arrow-right ms-1"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service'],
    };
</script>
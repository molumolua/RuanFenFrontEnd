<template>
    <div class="section-title small-mb__40 tablet-mb__40">
        <h6 class="section-sub-title mb-20">{{ aboutData.sectionSubTitle }}</h6>
        <h3 class="heading" v-html="aboutData.sectionTitle"></h3>
        <p class="text mt-20">{{ aboutData.desc }}</p>
        <div class="sider-title-button-box mt-30">
            <nuxt-link class="ht-btn ht-btn-md" to="/about">Join us now</nuxt-link>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['aboutData']
    };
</script>
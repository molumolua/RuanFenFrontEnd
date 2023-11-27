<template>
    <div class="section-title-wrap text-center">
        <h6 class="section-sub-title mb-20">{{ subTitle }}</h6>
        <h3 class="heading" v-html="title"></h3>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle']
    };
</script>
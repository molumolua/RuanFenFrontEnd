<template>
    <div class="ht-box-images style-05">
        <div class="image-box-wrap">
            <div class="box-image">
                <div class="default-image">
                    <img class="img-fulid" :src="service.icon" alt="icon">
                </div>
                <div class="hover-images">
                    <img class="img-fulid" :src="service.hoverIcon" alt="icon">
                </div>
            </div>
            <div class="content">
                <h5 class="heading">{{ service.heading }}</h5>
                <div class="text">{{ service.desc }}</div>
                <div class="box-images-arrow">
                    <nuxt-link :to="`/service/${service.slug}`">
                        <span class="button-text">Discover now</span>
                        <i class="fas fa-arrow-right ms-1 ms-1"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>
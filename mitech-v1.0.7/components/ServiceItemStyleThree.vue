<template>
    <nuxt-link :to="`/service/${service.slug}`" class="ht-large-box-images style-04">
        <div class="large-image-box">
            <div class="box-image">
                <div class="default-image">
                    <img class="img-fluid" :src="service.image" alt="image">
                </div>
            </div>
            <div class="content">
                <h5 class="heading">{{ service.heading }}</h5>
                <div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                </div>
                <div class="box-images-arrow">
                    <span class="button-text">Discover now</span>
                    <i class="fas fa-arrow-right ms-1"></i>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        props: ['service']
    };
</script>
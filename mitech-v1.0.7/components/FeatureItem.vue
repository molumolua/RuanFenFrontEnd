<template>
    <nuxt-link :to="`/service/${service.slug}`" class="box-large-image__wrap wow move-up">
        <div class="box-large-image__box">
            <div class="box-large-image__midea">
                <div class="images-midea">
                    <img :src="service.image" class="img-fluid" alt="feature thumbnail">
                    <div class="button-wrapper">
                        <div class="btn tm-button">
                            <span class="button-text">Learn more</span>
                        </div>
                    </div>
                    <div class="heading-wrap">
                        <h5 class="heading">{{ service.heading }}</h5>
                    </div>
                </div>
            </div>

            <div class="box-large-image__content mt-30 text-center">
                <p v-html="service.desc"></p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        props: ['service']
    };
</script>
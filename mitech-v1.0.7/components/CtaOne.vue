<template>
    <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_two" :style="{ backgroundImage: `url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png')` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-8 col-lg-7">
                    <div class="cta-content md-text-center">
                        <h3 class="heading" v-html="data.ctaOne.title"></h3>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="cta-button-group--two text-center">
                        <nuxt-link to="/contact" class="btn btn--white btn-one">
                            <span class="btn-icon mr-2">
                                <i class="far fa-comment-alt"></i>
                            </span> 
                            Let's talk
                        </nuxt-link>
                        <nuxt-link to="/about" class="btn btn--secondary btn-two">
                            <span class="btn-icon mr-2">
                                <i class="fas fa-info-circle"></i>
                            </span> 
                            Get info
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/cta.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
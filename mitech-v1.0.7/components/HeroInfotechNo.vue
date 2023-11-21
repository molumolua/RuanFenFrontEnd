<template>
    <div class="infotechno-hero infotechno-bg">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="infotechno-hero-text  wow move-up">
                        <h6>{{ data.heroInfotechno.subTitle }}</h6>
                        <h1 class="font-weight--reguler mb-15" v-html="data.heroInfotechno.title"></h1>
                        <p>{{ data.heroInfotechno.desc }}</p>
                        <div class="hero-button  mt-30">
                            <nuxt-link class="ht-btn ht-btn-md" to="/about">Get details</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="infotechno-hero-inner-images">
                        <div class="infotechno-inner-one">
                            <img class="img-fluid" :src="data.heroInfotechno.bgImg" alt="hero image">
                        </div>
                        <div class="infotechno-inner-two  wow move-up">
                            <img class="img-fluid" :src="data.heroInfotechno.img" alt="hero image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/hero.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
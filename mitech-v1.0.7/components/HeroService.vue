<template>
    <div class="service-hero-wrapper service-hero-space service-hero-bg" :style="{ backgroundImage: `url(${data.heroService.bgImg})` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 ms-auto me-auto">
                    <div class="service-hero-wrap wow move-up">
                        <div class="service-hero-text text-center">
                            <h3 class="text-white">{{ data.heroService.subTitle }}</h3>
                            <h1 class="font-weight--reguler text-white mb-30">{{ data.heroService.title }}</h1>
                            <div class="service-solution-form-wrap me-auto ms-auto">
                                <form action="#" method="post">
                                    <div class="hero-select-form">
                                        <div class="contact-select">
                                            <div class="form-item contact-inner">
                                                <span class="inquiry">
                                                    <select class="select-item" :style="{ backgroundImage: `url('/images/icons/hero-selector-icon.png')` }">
                                                        <option value="Your inquiry about">How can we help you?</option>
                                                        <option value="General Information Request">It Services</option>
                                                        <option value="Partner Relations">Managed IT Services</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <p class="text-white">{{ data.heroService.desc }}</p>
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
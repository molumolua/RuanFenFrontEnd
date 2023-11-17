<template>
    <div class="tabs-wrapper bg-gray section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                        <h6 class="section-sub-title mb-20">discover our company</h6>
                        <h3 class="section-title">We’ve been thriving in<span class="text-color-primary"> 38 years</span> </h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 ht-tab-wrap">
                    <div class="text-center  ">
                        <ul class="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                            <li class="tab__item nav-item">
                                <a class="nav-link" href="#tab_mission" @click.prevent="setActive('tab_mission')" :class="{ active: isActive('tab_mission') }">Our mission</a>
                            </li>

                            <li class="tab__item nav-item">
                                <a class="nav-link" href="#tab_services" @click.prevent="setActive('tab_services')" :class="{ active: isActive('tab_services') }">Our services</a>
                            </li>

                            <li class="tab__item nav-item">
                                <a class="nav-link" href="#tab_partners" @click.prevent="setActive('tab_partners')" :class="{ active: isActive('tab_partners') }">Technology partners</a>
                            </li>

                            <li class="tab__item nav-item">
                                <a class="nav-link" href="#tab_awards" @click.prevent="setActive('tab_awards')" :class="{ active: isActive('tab_awards') }">Our awards</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content ht-tab__content">
                        <div class="tab-pane fade" :class="{ 'active show': isActive('tab_mission') }" id="tab_mission">
                            <div class="tab-history-wrap section-space--mt_40">
                                <div class="row">
                                    <div class="col-lg-6 ">
                                        <VideoPupupOne />
                                    </div>
                                    <div class="col-lg-5 offset-lg-1 ">
                                        <div class="tab-content-inner mt-30">
                                            <div class="text mb-30">We’re available for 8 hours a day! <br>Contact to require a detailed analysis and assessment of your plan.
                                            </div>
                                            <ul class="check-list section-space--mb_40">
                                                <li class="list-item">IT Consultancy </li>
                                                <li class="list-item">IT Design </li>
                                                <li class="list-item">Desktop Computing </li>
                                                <li class="list-item">Software Engineering </li>
                                            </ul>

                                            <div class="tab-button">
                                                <nuxt-link to="/" class="btn-text">
                                                    <span class="button-text">Let's get started <i class="fas fa-arrow-right ms-1"></i></span>
                                                </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('tab_services') }" id="tab_services">
                            <div class="tab-history-wrap section-space--mt_60">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6" v-for="service in data.services.slice(14, 17)" :key="service.id">
                                        <ServiceItemStyleThree :service="service" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('tab_partners') }" id="tab_partners">
                            <div class="tab-history-wrap section-space--mt_60 brand-logo-slider__one">
                                <div class="modern-grid--6">
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-01.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-01-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-02.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-02-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-03.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-03-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-04.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-04-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-05.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-05-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-06.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-06-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-07.png" class="img-fluid" alt="image">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-07-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>
                                    <div class="brand-logo brand-logo--slider">
                                        <nuxt-link to="/">
                                            <div class="brand-logo__image">
                                                <img src="/images/brand/client-logo-08.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="/images/brand/client-logo-08-hover.png" class="img-fluid" alt="image">
                                            </div>
                                        </nuxt-link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('tab_awards') }" id="tab_awards">
                            <div class="tab-history-wrap section-space--mt_20">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="ht-box-images style-08 move-up animate">
                                            <div class="image-box-wrap">
                                                <div class="box-image">
                                                    <div class="image">
                                                        <img src="/images/award/mitech-company-award-01-161x110.jpg" alt="image">
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <h6 class="heading"> Top Training Companies 2016 </h6>
                                                    <div class="text">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="ht-box-images style-08 move-up animate">
                                            <div class="image-box-wrap">
                                                <div class="box-image">
                                                    <div class="image">
                                                        <img src="/images/award/mitech-company-award-02-161x116.jpg" alt="image">
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <h6 class="heading">CIO Big Data 100 </h6>
                                                    <div class="text">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="ht-box-images style-08 move-up animate">
                                            <div class="image-box-wrap">
                                                <div class="box-image">
                                                    <div class="image">
                                                        <img src="/images/award/mitech-company-award-03-161x112.jpg" alt="image">
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <h6 class="heading">Top 20 Sales Training Companies 2015 </h6>
                                                    <div class="text">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="ht-box-images style-08 move-up animate">
                                            <div class="image-box-wrap">
                                                <div class="box-image">
                                                    <div class="image">
                                                        <img src="/images/award/mitech-company-award-04-161x109.jpg" alt="image">
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <h6 class="heading">Pharma Tech Outlook </h6>
                                                    <div class="text">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VideoPupupOne from '@/components/VideoPupupOne';
    import ServiceItemStyleThree from '@/components/ServiceItemStyleThree';

    import data from '../../data/service.json';
    export default {
        components: {
            VideoPupupOne,
            ServiceItemStyleThree
        },
        data(){
            return {
                data,
                activeItem: 'tab_mission'
            }
        },
        methods: {
            isActive (menuItem) {
                return this.activeItem === menuItem
            },
            setActive (menuItem) {
                this.activeItem = menuItem
            }
        }
    };
</script>
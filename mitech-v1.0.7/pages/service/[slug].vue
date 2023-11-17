<template>
    <div class="main-container">

        <Header />

        <div class="about-banner-wrap banner-space bg-cover" :style="{ backgroundImage: `url('/images/bg/managed-it-services-hero-bg.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 ms-auto me-auto">
                        <div class="about-banner-content text-center">
                            <h1 class="mb-15 text-white">{{ data.heading }}</h1>
                            <h5 class="font-weight--normal text-white">Reach out to the world’s most reliable IT services.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0">
            <div class="container">
                <div class="cybersecurity-about-box">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="modern-number-01">
                                <h3 class="heading mt-0">Learn More About Our <span class="text-color-primary"> Success <br> Stories</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <div class="conact-us-wrap-one managed-it">
                                <h5 class="heading ">Mitech specializes in <span class="text-color-primary"> technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>

                                <div class="sub-heading">We’re available for 8 hours a day!<br>Contact to require a detailed analysis and assessment of your plan.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion-wrapper section-space--pb_100">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-6 pr-5">
                        <div class="faq-two-wrapper">
                            <AccordionTwo />
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <!-- Start single-popup-wrap -->
                        <div class="video-interview section-space--mt_40 video-popup">
                            <a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="video-link mt-30">
                                <div class="single-popup-wrap">
                                    <img class="img-fluid border-radus-5" src="/images/bg/mitech-home-infotechno-box-large-image-03-540x320.jpg" alt="">
                                    <div class="ht-popup-video video-button">
                                        <div class="video-mark">
                                            <div class="wave-pulse wave-pulse-1"></div>
                                            <div class="wave-pulse wave-pulse-2"></div>
                                        </div>
                                        <div class="video-button__two">
                                            <div class="video-play">
                                                <span class="video-play-icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <!-- End single-popup-wrap -->
                    </div>
                </div>
            </div>
        </div>

        <div class="feature-icon-wrapper section-space--pb_70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrap text-center section-space--mb_20">
                            <h3 class="heading">Prominent IT Security Services</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="feature-list__three">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <div class="icon">
                                                        <i class="fas fa-shield-alt"></i>
                                                    </div>
                                                    <h5 class="heading">
                                                        Mitech Management Systems
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text">Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty management.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <div class="icon">
                                                        <i class="fas fa-lock"></i>
                                                    </div>
                                                    <h5 class="heading">
                                                        Reliable Multi-function Technology
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text">Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <div class="icon">
                                                        <i class="fas fa-magnet"></i>
                                                    </div>
                                                    <h5 class="heading">
                                                        Highly Professional Staffs
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text">Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <div class="icon">
                                                        <i class="fas fa-medal"></i>
                                                    </div>
                                                    <h5 class="heading">
                                                        Infrastructure Integration Technology
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.</div>
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

        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import AccordionTwo from '@/components/AccordionTwo';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '~/data/service.json';

    export default {
        components: {
            Header,
            AccordionTwo,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                slug: this.$route.params.slug
            }
        },
        mounted () {
            this.data = data.services.find(service => service.slug == this.slug);
        },
    };
</script>
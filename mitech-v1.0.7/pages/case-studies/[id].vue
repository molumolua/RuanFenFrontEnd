<template>
    <div class="main-container">
        <Header />
        <div class="case-studies-details-wrapper">
            <div class="about-banner-wrap vision-space bg-cover" :style="{ backgroundImage: `url('/images/bg/managed-it-services-hero-bg.jpg')` }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 ms-auto me-auto">
                            <div class="about-banner-content text-center">
                                <div class="banner-logo-img mb-20">
                                    <img src="/images/icons/mitech-aqua-logo-83x108.png" alt="image">
                                </div>
                                <h1 class="mb-15 text-white">{{ data.heading }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="vision-overview section-space--pt_100">
                <div class="container">
                    <div class="row">
                        <div class="col-12 section-title">
                            <div class="section-title-wrap section-space--mb_30">
                                <h3 class="heading">Overview</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="vision-content">
                                <h5 class="heading">Inventions, literary works, music &amp; design are all intangible assets. The legal right to these ‘creations of the mind’ is Intellectual Property (IP).</h5>

                                <div class="author section-space--mt_60">
                                    <h6 class="font-weight--reguler mb-1">Maggie Strickland</h6>
                                    <p>/ Group Chief Information – Aqua Group</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-7">
                            <div class="portfolio-details-content">
                                <div class="text ">
                                    <p>The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)</p>
                                </div>
                                <div class="portfolio-details-table section-space--mt_60">
                                    <table class="">
                                        <tbody>
                                            <tr class="portfolio-details-tags">
                                                <td class="label">Tags</td>
                                                <td>
                                                    <nuxt-link to="/">Basic</nuxt-link>
                                                </td>
                                            </tr>

                                            <tr class="portfolio-details-share">
                                                <td class="label">Share</td>
                                                <td class="portfolio-sharing-list">
                                                    <div class="inner">
                                                        <a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="https://twitter.com/">
                                                            <i class="fab fa-twitter"></i>
                                                        </a>
                                                        <a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook"  href="https://www.facebook.com/">
                                                            <i class="fab fa-facebook-f"></i>
                                                        </a>
                                                        <a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/">
                                                            <i class="fab fa-linkedin"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="requirements-vision section-space--pt_60">
                <div class="container">
                    <div class="ht-problem-solution style-01">
                        <div class="row">
                            <div class="col-md-4">
                                <h4 class="label problem-label section-space--mb_50">Requirements</h4>
                            </div>
                            <div class="offset-md-1 col-md-7">
                                <h4 class="label solution-label section-space--mb_50">Our solution</h4>
                            </div>
                        </div>

                        <div class="item">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6 class="problem">The communication between machines of different kinds sometimes cause troubles and inaccurate signal decoding results. </h6>
                                </div>
                                <div class="offset-md-1 col-md-7">
                                    <div class="solution">
                                        Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6 class="problem">The potential market for servers and networking equipment development is still unstable and shrinks every year. </h6>
                                </div>
                                <div class="offset-md-1 col-md-7">
                                    <div class="solution">
                                        Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6 class="problem">Demand for energy efficient technology – the market demands high performance products using low power technology.</h6>
                                </div>
                                <div class="offset-md-1 col-md-7">
                                    <div class="solution">
                                        This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="results-wrap section-space--ptb_60">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="heading">
                                    <h2>Results:</h2>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="text">
                                    ARM has an innovative business model. ARM does not manufacture the products in which its technology is used.
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
                            <div class="faq-two-wrapper section-space--mt_40">
                                <AccordionTwo />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="video-interview section-space--mt_40 video-popup">
                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="video-link mt-30" target="_blank">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TestimonialTwo />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import data from '../../data/caseStidies.json';

    import Header from '@/components/Header';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import AccordionTwo from '@/components/AccordionTwo';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            TestimonialTwo,
            AccordionTwo,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                id: this.$route.params.id,
            }
        },
        mounted () {
            this.data = data.projects.find(project => project.id == this.$route.params.id);
        },
    };
</script>
<template>
    <div class="main-container">

        <HeaderCybersecurity />

        <HeroCybersecurity />

        <div class="feature-large-images-wrapper section-space--ptb_100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- section-title-wrap Start -->
                        <div class="section-title-wrap text-center section-space--mb_60">
                            <h6 class="section-sub-title mb-20">Our company</h6>
                            <h3 class="heading">
                                We run all kinds of IT services that <br> vow your <span class="text-color-primary">success</span>
                            </h3>
                        </div>
                        <!-- section-title-wrap Start -->
                    </div>
                </div>

                <div class="cybersecurity-about-box section-space--pb_100">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-1">
                            <div class="modern-number-01">
                                <h2 class="heading mr-5">
                                    <span class="mark-text">38</span>Years’ Experience in IT
                                </h2>
                                <h6 class="heading mt-30">Learn more about our success stories</h6>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="cybersecurity-about-text">
                                <div class="text">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.</div>
                                <div class="button-text">
                                    <nuxt-link to="/about" class="btn-text">
                                        Discover now
                                        <span class="button-icon ml-1">
                                            <i class="fas fa-arrow-right ms-1"></i>
                                        </span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 wow move-up">
                                <!-- ht-box-icon Start -->
                                <nuxt-link to="" class="ht-large-box-images style-03">
                                    <div class="large-image-box">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fluid" src="/images/box-image/blog-01-480x298.jpg" alt="images">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">Quality Assurance System</h5>
                                            <div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                                            </div>
                                            <div class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="fas fa-arrow-right ms-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                                <!-- ht-box-icon End -->
                            </div>
                            <div class="col-lg-4 col-md-6 wow move-up">
                                <!-- ht-box-icon Start -->
                                <nuxt-link to="" class="ht-large-box-images style-03">
                                    <div class="large-image-box">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fluid" src="/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg" alt="images">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">Highly Professional Staffs</h5>
                                            <div class="text">Having obtained the official & formal training in IT technology and technical fields, our staffs know best.
                                            </div>
                                            <div class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="fas fa-arrow-right ms-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                                <!-- ht-box-icon End -->
                            </div>
                            <div class="col-lg-4 col-md-6 wow move-up">
                                <!-- ht-box-icon Start -->
                                <nuxt-link to="" class="ht-large-box-images style-03">
                                    <div class="large-image-box">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fluid" src="/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg" alt="images">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">Info Security Management</h5>
                                            <div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                                            </div>
                                            <div class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="fas fa-arrow-right ms-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                                <!-- ht-box-icon End -->
                            </div>
                        </div>
                        <div class="section-under-heading text-center section-space--mt_20">
                            Challenges are just opportunities in disguise 
                            <nuxt-link to="/contact">Take the challenge!</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ServiceStyleTwo class="bg-gray" />

        <FunFactTwo />

        <CaseStudiesSectionTwo />

        <PricingOne />

        <BlogStyleOne />

        <QualifiedMethod />

        <ContactUsFour />

        <ContactUsThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderCybersecurity from '@/components/HeaderCybersecurity';
    import HeroCybersecurity from '@/components/HeroCybersecurity';
    import ServiceStyleTwo from '@/components/sections/ServiceStyleTwo';
    import FunFactTwo from '@/components/FunFactTwo';
    import CaseStudiesSectionTwo from '@/components/sections/CaseStudiesSectionTwo';
    import PricingOne from '@/components/sections/PricingOne';
    import BlogStyleOne from '@/components/sections/BlogStyleOne';
    import QualifiedMethod from '@/components/QualifiedMethod';
    import ContactUsFour from '@/components/sections/ContactUsFour';
    import ContactUsThree from '@/components/sections/ContactUsThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            HeaderCybersecurity,
            HeroCybersecurity,
            ServiceStyleTwo,
            FunFactTwo,
            CaseStudiesSectionTwo,
            PricingOne,
            BlogStyleOne,
            QualifiedMethod,
            ContactUsFour,
            ContactUsThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Mitech || Appointment'
            }
        }
    };
</script>
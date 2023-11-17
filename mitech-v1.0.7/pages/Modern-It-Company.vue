<template>
    <div class="main-container">
        <HeaderTwo />
        <div class="modern-it-company-top-area">
            <HeroModernItCompany />

            <div class="brand-logo-slider-area section-space--ptb_80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title section-space--mb_60">
                                <h5 class="heading-text text-center">
                                    Step forward to become one of 
                                    <span class="text-color-primary">49,494</span>
                                    successful clients of Mitech and get in the front line for the most wonderful presentation.
                                </h5>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <BrandLogoCarousel />
                        </div>
                    </div>
                </div>
            </div>

            <div class="modern-it-company-clients-review-area modern-it-company-testimonial-bg section-space--pb_120">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="image text-center">
                                <img src="/images/testimonial/home-reputable-success-about-image.jpg" class="img-fluid" alt="image">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="modern-it-company-testimonial text-left">
                                <p class="text">You know you did right when all your effort started to pay off in an unexpected and impressive way. @Mitech brings clients and businesses together in a fair play field.</p>
                                <div class="author">
                                    <h6>Luna Lovewoods</h6>
                                    <p>/ Web design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FunFactFour />
        <FeatureGalleryThree />
        <ProjectGallery />
        <CtaContactTwo />
        <ClaimContent />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import HeaderTwo from '@/components/HeaderTwo';
    import HeroModernItCompany from '@/components/HeroModernItCompany';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import FunFactFour from '@/components/FunFactFour';
    import FeatureGalleryThree from '@/components/sections/FeatureGalleryThree';
    import ProjectGallery from '@/components/sections/ProjectGallery';
    import CtaContactTwo from '@/components/CtaContactTwo';
    import ClaimContent from '@/components/sections/ClaimContent';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            HeaderTwo,
            HeroModernItCompany,
            BrandLogoCarousel,
            FunFactFour,
            FeatureGalleryThree,
            ProjectGallery,
            CtaContactTwo,
            ClaimContent,
            Footer,
            OffCanvasMobileMenu
        }
    }
</script>
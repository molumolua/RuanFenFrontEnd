<template>
    <div class="main-container">
        <HeaderProcessing />
        <HeroService />
        <FeatureGallery />
        <CompanyHistory />
        <ServiceStyleTwo class="bg-gray" />
        <FourSteps />
        <CtaThree />
        <CaseStudiesSectionTwo />
        <PricingOne />
        <BlogStyleTwo />
        <ContactUsTwo />
        <BrandLogoCarousel />
        <Footer />
        <OffCanvasMobileMenu />
        <SearchOverlay />
    </div>
</template>

<script>
    import HeaderProcessing from '@/components/HeaderProcessing';
    import HeroService from '@/components/HeroService';
    import FeatureGallery from '@/components/sections/FeatureGallery';
    import CompanyHistory from '@/components/sections/CompanyHistory';
    import ServiceStyleTwo from '@/components/sections/ServiceStyleTwo';
    import FourSteps from '@/components/sections/FourSteps';
    import CtaThree from '@/components/CtaThree';
    import CaseStudiesSectionTwo from '@/components/sections/CaseStudiesSectionTwo';
    import PricingOne from '@/components/sections/PricingOne';
    import ContactUsTwo from '@/components/sections/ContactUsTwo';
    import BlogStyleTwo from '@/components/sections/BlogStyleTwo';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import SearchOverlay from '@/components/SearchOverlay';

    export default {
        components: {
            HeaderProcessing,
            HeroService,
            FeatureGallery,
            CompanyHistory,
            ServiceStyleTwo,
            FourSteps,
            CtaThree,
            CaseStudiesSectionTwo,
            PricingOne,
            BlogStyleTwo,
            ContactUsTwo,
            BrandLogoCarousel,
            Footer,
            OffCanvasMobileMenu,
            SearchOverlay
        }
    };
</script>
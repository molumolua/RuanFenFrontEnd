<template>
    <div class="main-container">
        <HeaderResolution />
        <HeroResolution />
        <FeatureGalleryTwo />
        <FunFactThree class="bg-gray" />
        <ServiceStyleFive />
        <CtaContactTwo />
        <TestimonialTwo />
        <FeatureGalleryFour />
        <CtaThree />
        <BrandLogoCarousel />
        <Footer />
        <OffCanvasMobileMenu />
        <SearchOverlay />
    </div>
</template>

<script>
    import HeaderResolution from '@/components/HeaderResolution';
    import HeroResolution from '@/components/HeroResolution';
    import FeatureGalleryTwo from '@/components/sections/FeatureGalleryTwo';
    import FunFactThree from '@/components/FunFactThree';
    import ServiceStyleFive from '@/components/sections/ServiceStyleFive';
    import CtaContactTwo from '@/components/CtaContactTwo';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import FeatureGalleryFour from '@/components/sections/FeatureGalleryFour';
    import CtaThree from '@/components/CtaThree';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import SearchOverlay from '@/components/SearchOverlay';
    
    export default {
        components: {
            HeaderResolution,
            HeroResolution,
            FeatureGalleryTwo,
            FunFactThree,
            ServiceStyleFive,
            CtaContactTwo,
            TestimonialTwo,
            FeatureGalleryFour,
            CtaThree,
            BrandLogoCarousel,
            Footer,
            OffCanvasMobileMenu,
            SearchOverlay
        },

        head() {
            return {
                title: 'Resolutions'
            }
        },
    };
</script>
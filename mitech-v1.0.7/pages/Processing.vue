<template>
    <div class="main-container">
        <HeaderProcessing />
        <HeroProcessing />
        <AccordionWrapper />
        <ServiceStyleThree />
        <FunFactThree />
        <CtaTwo />
        <GalleryOne />
        <TestimonialTwo />
        <BrandLogoCarousel />
        <CtaContactTwo />
        <Footer />
        <OffCanvasMobileMenu />
        <SearchOverlay />
    </div>
</template>

<script>
    import HeaderProcessing from '@/components/HeaderProcessing';
    import HeroProcessing from '@/components/HeroProcessing';
    import AccordionWrapper from '@/components/sections/AccordionWrapper';
    import ServiceStyleThree from '@/components/sections/ServiceStyleThree';
    import FunFactThree from '@/components/FunFactThree';
    import CtaTwo from '@/components/CtaTwo';
    import GalleryOne from '@/components/sections/GalleryOne';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import CtaContactTwo from '@/components/CtaContactTwo';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import SearchOverlay from '@/components/SearchOverlay';
    export default {
        components: {
            HeaderProcessing,
            HeroProcessing,
            AccordionWrapper,
            ServiceStyleThree,
            FunFactThree,
            CtaTwo,
            GalleryOne,
            TestimonialTwo,
            BrandLogoCarousel,
            CtaContactTwo,
            Footer,
            OffCanvasMobileMenu,
            SearchOverlay
        },
    };
</script>
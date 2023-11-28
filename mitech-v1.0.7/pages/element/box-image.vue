<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Box Image" breadcrumbTitle="Box Image" />
        <ServiceIT />
        <ServiceStyleThree />
        <FeatureGallery />
        <ServiceStyleSix />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ServiceIT from '@/components/ServiceIT';
    import ServiceStyleThree from '@/components/sections/ServiceStyleThree';
    import FeatureGallery from '@/components/sections/FeatureGallery';
    import ServiceStyleSix from '@/components/sections/ServiceStyleSix';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ServiceIT,
            ServiceStyleThree,
            FeatureGallery,
            ServiceStyleSix,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
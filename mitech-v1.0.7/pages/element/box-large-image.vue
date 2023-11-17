<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Box Large Image" breadcrumbTitle="Box Large Image" />
        <ServiceStyleSeven />
        <ServiceStyleThree />
        <ServiceStyleEight />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ServiceStyleSeven from '@/components/sections/ServiceStyleSeven';
    import ServiceStyleThree from '@/components/sections/ServiceStyleThree';
    import ServiceStyleEight from '@/components/sections/ServiceStyleEight';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ServiceStyleSeven,
            ServiceStyleThree,
            ServiceStyleEight,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
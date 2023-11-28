<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Gradation" breadcrumbTitle="Gradation" />
        <FourSteps />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import FourSteps from '@/components/sections/FourSteps';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            FourSteps,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
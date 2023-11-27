<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="IT Solutions" breadcrumbTitle="IT Solutions" />
        <ServiceITSolution />
        <CtaContactTwo />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ServiceITSolution from '@/components/sections/ServiceITSolution';
    import CtaContactTwo from '@/components/CtaContactTwo';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ServiceITSolution,
            CtaContactTwo,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
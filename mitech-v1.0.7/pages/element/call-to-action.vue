<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Call To Action" breadcrumbTitle="Call To Action" />
        <CtaThree />
        <CtaOne />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import CtaOne from '@/components/CtaOne';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            CtaOne,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
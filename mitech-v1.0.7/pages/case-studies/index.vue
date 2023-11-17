<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Case Studies" breadcrumbTitle="Case Studies" />
        <CaseStudiesItemWrapper />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import CaseStudiesItemWrapper from '@/components/sections/CaseStudiesItemWrapper';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            CaseStudiesItemWrapper,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
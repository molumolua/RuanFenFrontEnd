<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Counters" breadcrumbTitle="Counters" />
        <FunFact />
        <FunFactTwo />
        <FunFactThree />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import FunFact from '@/components/FunFact';
    import FunFactTwo from '@/components/FunFactTwo';
    import FunFactThree from '@/components/FunFactThree';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            FunFact,
            FunFactTwo,
            FunFactThree,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
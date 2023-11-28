<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="IT Services" breadcrumbTitle="IT Services" />
        <ServiceIT />
        <ContactUsThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ServiceIT from '@/components/ServiceIT';
    import ContactUsThree from '@/components/sections/ContactUsThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ServiceIT,
            ContactUsThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
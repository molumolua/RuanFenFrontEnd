<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Contact Us" breadcrumbTitle="Contact Us" />
        <ContactUsFour />
        <ContactUsInfo />
        <CtaOne />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ContactUsFour from '@/components/sections/ContactUsFour';
    import ContactUsInfo from '@/components/ContactUsInfo';
    import CtaOne from '@/components/CtaOne';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ContactUsFour,
            ContactUsInfo,
            CtaOne,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
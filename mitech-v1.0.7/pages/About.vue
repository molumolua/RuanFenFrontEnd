<template>
    <div class="main-container">
        <Header />
        <PageHeader />
        <AboutCompanyTwo />
        <CtaFour />
        <AboutDelivery />
        <FunFactTwo />
        <TestimonialTwo class="pb-0 bg-white" />
        <BrandLogoCarousel />
        <ContactUsThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import PageHeader from '@/components/PageHeader';
    import AboutCompanyTwo from '@/components/AboutCompanyTwo';
    import CtaFour from '@/components/CtaFour';
    import AboutDelivery from '@/components/AboutDelivery';
    import FunFactTwo from '@/components/FunFactTwo';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import ContactUsThree from '@/components/sections/ContactUsThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        name: 'about',
        components: {
            Header,
            PageHeader,
            AboutCompanyTwo,
            CtaFour,
            AboutDelivery,
            FunFactTwo,
            TestimonialTwo,
            BrandLogoCarousel,
            ContactUsThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'About Us',
                meta: [
                    { 
                        hid: 'description', 
                        name: 'description', 
                        content: 'About our description' 
                    }
                ]
            }
        }
    };
</script>
<template>
    <div class="main-container">
        <HeaderAppointment />
        <HeroAppointment />
        <ServiceStyleTwo />
        <TabSection />
        <TeamOne />
        <CtaOne />
        <CaseStudiesSection />
        <TestimonialTwo />
        <FunFactTwo />
        <ContactUs />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import HeroAppointment from '@/components/HeroAppointment';
    import ServiceStyleTwo from '@/components/sections/ServiceStyleTwo';
    import TabSection from '@/components/sections/TabSection';
    import TeamOne from '@/components/sections/TeamOne';
    import CtaOne from '@/components/CtaOne';
    import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import FunFactTwo from '@/components/FunFactTwo';
    import ContactUs from '@/components/sections/ContactUs';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            HeaderAppointment,
            HeroAppointment,
            ServiceStyleTwo,
            TabSection,
            TeamOne,
            CtaOne,
            CaseStudiesSection,
            TestimonialTwo,
            FunFactTwo,
            ContactUs,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
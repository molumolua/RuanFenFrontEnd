<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Accordion" breadcrumbTitle="Accordion" />

        <div class="accordion-wrapper section-space--pb_90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="faq-wrapper section-space--pt_90">
                            <div class="section-elements-title mb-30">
                                <h4>Accordions 01</h4>
                            </div>
                            <AccordionOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import AccordionOne from '@/components/AccordionOne';
    import AccordionTwo from '@/components/AccordionTwo';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            AccordionOne,
            AccordionTwo,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
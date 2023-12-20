<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Institution Name" breadcrumbTitle="Institution Name" />
        <InstitutionsMember/>
        <Footer />
    </div>
</template>


<script>
    import Breadcrumbs from '@/components/Breadcrumbs';
    import InstitutionsMember from '@/components/InstitutionsMember.vue';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            InstitutionsMember,
            Breadcrumbs,
            Header,
            Footer,
            OffCanvasMobileMenu
        },
    };

</script>
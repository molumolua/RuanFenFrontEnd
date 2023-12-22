<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Institution List" breadcrumbTitle="Institution List" />
        <ListInstitution/>
        <Footer />
    </div>
</template>


<script>
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ListInstitution from '@/components/ListInstitution.vue';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            ListInstitution,
            Breadcrumbs,
            Header,
            Footer,
            OffCanvasMobileMenu
        },
    };

</script>
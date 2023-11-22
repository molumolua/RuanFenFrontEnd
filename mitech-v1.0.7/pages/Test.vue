<template>
    <div class="main-container">
        <Header />
        <TestMain />
        <Footer />
    </div>
</template>


<script>
    import Header from '@/components/Header';
    import TestMain from '@/components/TestMain.vue';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            TestMain,
            Footer,
            OffCanvasMobileMenu
        }
    };

</script>
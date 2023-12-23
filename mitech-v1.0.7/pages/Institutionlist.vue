<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Institution List" breadcrumbTitle="Institution List" />
        <ChatBot prompt=""/>
        <ListInstitution/>
        <Footer />
    </div>
</template>


<script>
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ListInstitution from '@/components/ListInstitution.vue';
    import Header from '@/components/Header';
    import ChatBot from '@/components/ChatBot.vue';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            ListInstitution,
            Breadcrumbs,
            Header,
            Footer,
            OffCanvasMobileMenu,
            ChatBot,
        },
        mounted() {//必须在onMounted的时候才能用local和window  
            getLoacl()
        },
    };

</script>
<template>
    <div class="main-container">
        <Header />
        <MainContent />
        <MainDisplay />
        <ChatBot prompt=""/>
        <Footer />
    </div>
</template>


<script>
    import MainDisplay from '@/components/MainDisplay.vue';
    import Header from '@/components/Header';
    import MainContent from '@/components/MainContent.vue';
    import ChatBot  from '@/components/ChatBot.vue';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            MainContent,
            MainDisplay,
            ChatBot,
            Footer,
            OffCanvasMobileMenu
        }
    };

</script>
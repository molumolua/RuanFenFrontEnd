<template>
    <div class="main-container">
        <Header />
        <ChatBot />
        <Footer />
    </div>
</template>


<script>
    import Header from '@/components/Header';
    import ChatBot from '@/components/ChatBot.vue';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            ChatBot,
            Footer,
            OffCanvasMobileMenu
        }
    };

</script>
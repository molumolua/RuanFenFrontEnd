<template>
    <div class="main-container">
        <Header />
        <MainContent />
        <MainDisplay />
        <ChatBot prompt=""/>
        <StaticPieChartForHomePage/>
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
    import StaticPieChartForHomePage from '@/components/StaticPieChartForHomePage';
    export default {
        components: {
            Header,
            MainContent,
            MainDisplay,
            ChatBot,
            Footer,
            OffCanvasMobileMenu,
            StaticPieChartForHomePage
        }
    };

</script>
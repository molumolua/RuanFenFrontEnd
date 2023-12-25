<template>
    <div class="main-container">
        <Header />
        <MainContent />
        <MainDisplay />
        <ChatBot prompt=""/>
        <div class="displaycontainer">
            <StaticPieChartForHomePage/>
            <StaticInstitutionMember/>  
        </div>
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
    import StaticInstitutionMember from '@/components/StaticInstitutionMember';
    export default {
        components: {
            Header,
            MainContent,
            MainDisplay,
            ChatBot,
            Footer,
            OffCanvasMobileMenu,
            StaticPieChartForHomePage,
            StaticInstitutionMember
        }
    };

</script>

<style scoped>
.displaycontainer{
    position: relative;
    left: 10%;
}
</style>
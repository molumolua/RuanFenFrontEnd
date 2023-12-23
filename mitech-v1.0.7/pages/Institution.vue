<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs :items="InsName" :breadcrumbTitle="InsName" />
        <ChatBot :prompt="InsName+','"/>
        <InstitutionsMember/>
        <Footer />
    </div>
</template>


<script>
    import Breadcrumbs from '@/components/Breadcrumbs';
    import InstitutionsMember from '@/components/InstitutionsMember.vue';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import ChatBot from '@/components/ChatBot.vue';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        mounted() {//必须在onMounted的时候才能用local和window  
            console.log(this.InsName)
            getLoacl()
        },
        components: {
            InstitutionsMember,
            Breadcrumbs,
            Header,
            Footer,
            OffCanvasMobileMenu,
            ChatBot
        },
        data () {
            return {
                InsName:useInsName().value
            }
        },
    };

</script>
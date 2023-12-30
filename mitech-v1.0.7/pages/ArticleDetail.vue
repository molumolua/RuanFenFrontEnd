<template>
    <div class="main-container">
        <Header />
        <ArticleMainContent />
        
        <ChatBot :prompt="useWorkName().value+','"/>
        <Footer/>
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import PageHeader from '@/components/PageHeader';
    import ArticleMainContent from '@/components/ArticleMainContent';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import ChatBot from "@/components/ChatBot.vue";
    export default {
        name: 'articledetail',
        components: {
            ArticleMainContent,
            Header,
            PageHeader,
            Footer,
            OffCanvasMobileMenu,
            ChatBot
        },
        mounted(){
            getLoacl()
            console.log(useWorkName().value)
            // window.onbeforeunload = () => {
            //     setLocal() 
            // }
        },
        data(){
            return{
                WorkName:useWorkName().value
            }
        },
        head() {
            return {
                title: 'Ariticle Detail',
                meta: [
                    { 
                        hid: 'description', 
                        name: 'description', 
                        content: 'About our description' 
                    }
                ]
            }
        }
    };
</script>
<template>
    <div class="main-container">
        <ArticleMainContent />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import PageHeader from '@/components/PageHeader';
    import ArticleMainContent from '@/components/ArticleMainContent';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        name: 'articledetail',
        components: {
            ArticleMainContent,
            Header,
            PageHeader,
            Footer,
            OffCanvasMobileMenu
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
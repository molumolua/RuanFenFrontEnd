<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Blogs" breadcrumbTitle="Blogs" />
        <BlogPageWrapper />
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import BlogPageWrapper from '@/components/sections/BlogPageWrapper';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    
    export default {
        components: {
            Header,
            Breadcrumbs,
            BlogPageWrapper,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>
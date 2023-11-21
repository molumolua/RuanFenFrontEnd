<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Leadership" breadcrumbTitle="Leadership" />
        <TeamTwo />
        <TeamMemberList />
        <CtaContact />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import TeamTwo from '@/components/sections/TeamTwo';
    import TeamMemberList from '@/components/sections/TeamMemberList';
    import CtaContact from '@/components/CtaContact';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            TeamTwo,
            TeamMemberList,
            CtaContact,
            Footer,
            OffCanvasMobileMenu
        }
    };
</script>    
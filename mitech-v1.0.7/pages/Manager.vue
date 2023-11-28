<template>
    <div>
        <Header />
        <ManagerInfo />
        <Divider />
        <ScholarCheck />
        <Divider />
        <PaperCheck />
        <Divider />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import Header from '@/components/Header';
import ManagerInfo from '@/components/ManagerInfo';
import Divider from '@/components/Divider'
import ScholarCheck from '@/components/ScholarCheck';
import PaperCheck from '@/components/PaperCheck';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
export default {
    components: {
        Header,
        ManagerInfo,
        Divider,
        ScholarCheck,
        PaperCheck,
        Footer,
        OffCanvasMobileMenu
    }
};

</script>
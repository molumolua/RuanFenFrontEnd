<template>
    <div>
        <Header />
        <pdf :url="url" />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import axios from 'axios';
import pdf from '@/components/Pdf'
export default {
    components: {
        pdf,
        Header,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            id: this.$route.params.id,
            url: useCheck().value
        }
    },
    methods: {
        //
    },
    mounted() {
        getLoacl()
    }
}
</script>
<style scoped>
.btn {
    size: 30%;
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 54px;
    height: 54px;
    background-color: #0869d899;
}
</style>
<template>
    <Header/>
    <Breadcrumbs items="Message Center" breadcrumbTitle="Message Center" />
    <Message/>
    <Footer />
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Message from '@/components/Message'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    components: {
        Message,
        Header,
        Footer,
        Breadcrumbs
    },
    data() {
        return {
            data: []
        }
    },
    mounted() {
        getLoacl();
        // console.log(data);
    }
}
</script>

<style></style>

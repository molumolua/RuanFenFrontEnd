<template>
    <div>
        <Header />
        <ManagerInfo />
        <Divider />
        <ScholarCheck />
        <Divider />
        <PaperCheck />
        <Divider />
        <ChatBot/>
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
import ChatBot from "@/components/ChatBot.vue";
import axios from 'axios';
export default {
    data() {
        const headers = {
            // 'Content-Type': 'application/json',
            'Authorization': 'Token ' + useToken().value
        }
        return {
            headers,
            info: null
        }
    },
    components: {
        Header,
        ManagerInfo,
        Divider,
        ScholarCheck,
        PaperCheck,
        Footer,
        OffCanvasMobileMenu,
        ChatBot
    },
    methods: {
        // async getData() {
        //     newData = await axios.get(this.url, { headers: this.headers }).then((response) => {
        //         console.log(response.data);
        //         data = response.data
        //     }).catch((error) => {
        //         console.log(error);
        //     })
        // },
    },
    async mounted() {
        getLoacl()
    }
}
</script>
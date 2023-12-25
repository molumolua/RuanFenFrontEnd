<template>
    <div>
        <Header />
        <Md />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import Md from '@/components/Md';

export default {
    components: {
        Header,
        Footer,
        OffCanvasMobileMenu,
        Md,
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
    async mounted() {
        getLoacl()
    }
};
</script>


<!-- <template>
    <Header />
    <ContentDoc :document="document">
        <template #not-found>
            <h1>文档未找到</h1>
        </template>
    </ContentDoc>
    <Footer />
    <OffCanvasMobileMenu />
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
// import Md from '@/components/Md'
export default {
    components: {
        // Md,
        Header,
        Footer,
        OffCanvasMobileMenu
    },
    async asyncData({ $content }) {
        const name = 'test'
        const document = await $content(name).fetch();
        return {
            document,
        };
    },
    data() {
        return {
            document: null
        }
    },
    beforeCreate() {
        Object.assign(this.$data, this.document);
    }
}
</script>

<style></style> -->

<template>
    <div>
        <div v-if="markdownContent" v-html="renderedMarkdown"></div>
        <div v-else>Loading...</div>
        <div>
            <!-- <iframe :src="http://121.36.19.201/media/analysis/test.md" width="100%" height="600px"></iframe> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import MarkdownIt from 'markdown-it';

export default {
    data() {
        return {
            markdownContent: ''
        }
    },
    computed: {
        renderedMarkdown() {
            const md = new MarkdownIt();
            return md.render(this.markdownContent);
        },
    },
    async mounted() {
        this.markdownContent = await this.get();
    },
    methods: {
        async get() {
            try {
                const response = await axios.get(useCheck().value);
                console.log('response:');
                console.log(response);
                const markdownContent = response.data;
                return markdownContent;
                // return useCheck().value
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
<!-- <template>
    <ContentDoc :document="document">
        <template #not-found>
            <h1>文档未找到</h1>
        </template>
    </ContentDoc>
</template>

<script>
export default {
    props: {
        document: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        console.log(this.document);
    }
}
</script>

<style>

</style> -->
<template>
    <Message/>
</template>

<script>
import Message from '@/components/Message'
export default {
    components: {
        Message
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

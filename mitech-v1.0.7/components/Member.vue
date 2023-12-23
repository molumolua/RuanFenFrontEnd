<template>
    <div class="grid-item">
        <nuxt-link to="/" class="ht-team-member">
            <div class="team-image">
                <img class="img-fluid" :src="teamMember.image" alt="team member">
            </div>
            <div class="team-info ">
                <h5 class="name">{{ teamMember.name }}</h5>
                <!-- <div class="position">{{ teamMember.designation }}</div> -->
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['teamMember']
    };
</script>
<style lang="scss" scoped>
img{
    height: 300px;
}
</style>

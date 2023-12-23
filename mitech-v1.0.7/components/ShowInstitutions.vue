<template>
    <div class="grid-item">
        <nuxt-link to="/institution" class="ht-team-member" @click="storeIns()">
            <div class="team-image">
                <img class="img-fluid" :src="teamMember.image" alt="team member">
            </div>
            <div class="team-info ">
                <h5 class="name">{{ teamMember.name }}</h5>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['teamMember'],
        methods:{
            storeIns(){
                console.log("storeIns!",this.teamMember.id)
                var InsId=useInsid()
                InsId.value=this.teamMember.id
                var InsName=useInsName()
                InsName.value=this.teamMember.name
                setLocal()
            }
        }
    };
</script>
<style lang="scss" scoped>
img{
    height: 200px;
}
</style>
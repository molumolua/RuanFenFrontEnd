<template>
    <div class="grid-item">
        <nuxt-link to="/institution" class="ht-member" @click="storeIns()">
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
.ht-member {
    & .team-image {
        position: relative;
    }
    & .social-networks {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 10px 0;
        opacity: 0;
        visibility: hidden;
        text-align: center;
        padding: 6px 0;
        background-color: $theme-color--three;
        transition: $transition--default;
        & a {
            display: inline-block;
            font-size: 16px;
            line-height: 0;
            color: #fff;
            padding: 10px 14px;
        }
    }
    &:hover {
        & .social-networks {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }
    & .team-info {
        margin-top: 20px;
    }
}
</style>
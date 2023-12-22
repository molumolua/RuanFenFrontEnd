<template>
    <div class="grid-item">
        <div class="ht-team-member">
            <div class="team-image">
                <img class="img-fluid" :src="teamMember.image" alt="team member">
                <nuxt-link to="/institution" class="inner" @click="storeIns()"></nuxt-link>
            </div>
            <div class="team-info ">
                <h5 class="name">{{ teamMember.name }}</h5>
                <!-- <div class="position">{{ teamMember.designation }}</div> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['teamMember'],
        methods:{
            storeIns(){
                var Insid=useInsid()
                Insid.value=this.teamMember.id
                var InsName=useInsName()
                InsName.value=this.teamMember.name
            }
        }
    };
</script>
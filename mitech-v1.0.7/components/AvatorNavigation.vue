<template>
    <ul>
        <li>
            <nuxt-link to="/login" v-if="userName==''">
                <span>Login</span>
            </nuxt-link>

            <nuxt-link to="/institutionlist" v-if="userName!=''" @click="setLocal()">
                <span>{{ userName }}</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/" v-if="userName!=''" @click="clearUser()">
                <span>Logout</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            userName:""
        }
    },
    mounted(){
        this.userName=useUserName().value.toUpperCase()
    },
    methods:{
        clearUser(){
            console.log("clear User!!")
            var Token=useToken()
            Token.value=""
            var userName=useUserName()
            userName.value=""
            this.userName=""
            
            setLocal()
        }
    }
}
</script>

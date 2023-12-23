<template>
    <div>
        <el-card>
            <el-descriptions class="margin-top" title="简介" :column="1" border>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><User /></el-icon>
                        用户名
                    </template>
                    {{user.username}}
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><UserFilled /></el-icon>
                        姓
                    </template>
                    {{user.last_name}}
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><UserFilled /></el-icon>
                        名
                    </template>
                    {{user.first_name}}
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Male /></el-icon>
                        <el-icon><Female /></el-icon>
                        性别
                    </template>
                    <el-tag size="small" v-if="user.gender != null">{{ user.gender }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item align="center" min-width="100px">
                    <template #label>
                        <el-icon><Message /></el-icon>
                        邮箱Email
                    </template>
                    {{user.email}}
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Iphone /></el-icon>
                        手机号码
                    </template>
                    {{user.phone_number}}
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><EditPen /></el-icon>
                        个人简介
                    </template>
                    {{user.description}}
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Calendar /></el-icon>
                        注册日期
                    </template>
                    {{user.date_joined.substring(0, user.date_joined.lastIndexOf("T"))}}
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>

<script>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from "axios";
const nuxtApp = useNuxtApp()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
}
export default {
    name: "info",
    data() {
        return {
            user: {
                id: Number,
                password: "",
                username: "",
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                gender: "",
                description: "",
                avatar_url: "",
                work_count: Number,
                date_joined: "",
      },
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        async load() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'token '+useToken().value
            };
            data = await axios.get('http://121.36.19.201/api/info/', { headers }).then((response) => {
                console.log(response.data);
                this.user.id = response.data.id
                this.user.username =  response.data.username
                this.user.first_name =  response.data.first_name
                this.user.last_name =  response.data.last_name
                this.user.email =  response.data.email
                this.user.phone_number =  response.data.phone_number
                this.user.gender =  response.data.gender
                this.user.description = response.data.description
                this.user.avatar_url = response.data.avatar_url
                this.user.work_count =  response.data.work_count
                this.user.date_joined = response.data.date_joined
            }).catch((error) => {
                console.log(error);
                alert("111")
            })
        },
    }
}
</script>

<style scoped>
.img {
    width: 80px;
    height: 80px;
}
.cell-item {
    display: flex;
    align-items: center;
}
</style>
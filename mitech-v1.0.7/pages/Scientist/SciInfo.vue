<template>
    <div>
        <el-card>
            <el-descriptions class="margin-top" title="简介" :column="1" border>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><UserFilled /></el-icon>
                        姓
                    </template>
                    last_name
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><UserFilled /></el-icon>
                        名
                    </template>
                    first_name
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Clock /></el-icon>
                        年龄
                    </template>
                    年龄
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Male /></el-icon>
                        <el-icon><Female /></el-icon>
                        性别
                    </template>
                    <el-tag size="small">性别</el-tag>
                </el-descriptions-item>
                <el-descriptions-item align="center" min-width="100px">
                    <template #label>
                        <el-icon><House /></el-icon>
                        工作单位
                    </template>
                    百航
                </el-descriptions-item>
                <el-descriptions-item align="center" min-width="100px">
                    <template #label>
                        <el-icon><MessageBox /></el-icon>
                        邮箱Email
                    </template>
                    EMAIL
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Iphone /></el-icon>
                        手机号码
                    </template>
                    手机号
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><EditPen /></el-icon>
                        个人简介
                    </template>
                    个人简介
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>

<script>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const nuxtApp = useNuxtApp()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
}
export default {
    name: "info"
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
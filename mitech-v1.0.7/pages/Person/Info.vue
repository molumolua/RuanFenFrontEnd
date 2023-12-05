<template>
    <div>
        <el-card>
            <el-descriptions class="margin-top" title="简介" :column="1" border>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Picture /></el-icon>
                        个人介绍
                    </template>
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Picture /></el-icon>
                        头像
                    </template>
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><User /></el-icon>
                        账户名
                    </template>
                    账户名
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><UserFilled /></el-icon>
                        昵称
                    </template>
                    昵称
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
                        <el-icon><Message /></el-icon>
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
                        <el-icon><Location /></el-icon>
                        地区
                    </template>
                    地区
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><OfficeBuilding /></el-icon>
                        职业
                    </template>
                    职业
                </el-descriptions-item>

                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Football /></el-icon>
                        兴趣爱好
                    </template>
                    兴趣
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><EditPen /></el-icon>
                        个性签名
                    </template>
                    个性签名
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Calendar /></el-icon>
                        注册日期
                    </template>
                    阿拉丁看见啊到家了卡机阿里卡大家啊垃圾袋卡仕达立卡就到了决斗链接阿是阿里卡大家啊世界等级阿卡老大阿阿拉丁看见啊到家了卡机阿里卡大家啊垃圾袋卡仕达立卡就到了决斗链接阿是阿里卡大家啊世界等级阿卡老大阿卡丽佳都科技阿里扫地机阿卡丽建档立卡决阿拉丁看见啊到家了卡机阿里卡大家啊垃圾袋卡仕达立卡就到了决斗链接阿是阿里卡大家啊世界等级阿卡老大阿卡丽佳都科技阿里扫地机阿卡丽建档立卡决阿拉丁看见啊到家了卡机阿里卡大家啊垃圾袋卡仕达立卡就到了决斗链接阿是阿里卡大家啊世界等级阿卡老大阿卡丽佳都科技阿里扫地机阿卡丽建档立卡决卡丽佳都科技阿里扫地机阿卡丽建档立卡决斗链接阿达
                </el-descriptions-item>
                <el-descriptions-item align="center">
                    <template #label>
                        <el-icon><Calendar /></el-icon>
                        注册日期
                    </template>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
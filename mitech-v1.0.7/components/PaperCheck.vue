<template>
    <p>!!!!</p>
    <!-- <el-table class="paper-application-table" :data="paperAnalysisApplications" height="250" style="width: 100%">
        <el-table-column prop="applicationID" label="申请ID" width="180" />
        <el-table-column prop="paperName" label="论文标题" />
        <el-table-column prop="paperContent" label="论文详情" />
        <el-table-column prop="username" label="解析人姓名" />
        <el-table-column prop="analysisContent" label="解析内容" />
        <el-table-column prop="time" label="申请时间" />
    </el-table> -->
</template>

<script>
export default {
    data() {
        return {
            paperAnalysisApplications: [
                {
                    applicationID: 111,
                    paperName: '母猪的产后护理',
                    paperContent: 'what',
                    username: '小明',
                    analysisContent: '这个指导书写的比编译的好',
                    time: '2023/11/28 00:00:00',

                }
            ]
        }
    }
}
</script>

<style>

</style>
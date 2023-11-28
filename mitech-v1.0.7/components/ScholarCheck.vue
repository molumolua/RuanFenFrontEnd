<template>
    <p>!!!!</p>
    <!-- <el-table class="scholar-application-table" :data="scholarApplications" height="250" style="width: 100%">
        <el-table-column prop="applicationID" label="申请ID" width="100" />
        <el-table-column prop="userID" label="申请人ID" width="100" />
        <el-table-column prop="username" label="申请人姓名" width="100" />
        <el-table-column prop="time" label="申请时间" width="180" />
        <el-table-column prop="content" label="申请详情" />
    </el-table> -->
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            scholarApplications: [
            {
                applicationID: 111,
                userID: 111,
                username: '小明',
                time: '2023/11/28 00:00:00',
                content: 'what',
            }
        ]
        }
    },
    methods: {
        // async getData() {
        //     const data = await axios.get('http://baidu.com');
        //     console.log(data)
        // },
    },
    mounted() {
        //
    }
}
</script>

<style>

</style>
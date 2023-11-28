<template>
    <div>
        <p>!!!!</p>
    <!-- <el-row>
        <el-col :span="4">
            姓名
        </el-col>
        <el-col :span="4">
            {{ manager.name }}
        </el-col>
        <el-col :span="4">
            管理员编号
        </el-col>
        <el-col :span="4">
            {{ manager.Managernumber }}
        </el-col>
    </el-row> -->
    </div>
</template>

<script>
export default {
 data() {
    return {
        manager:{
            name: "小明",
            Managernumber: 123,
        }
    }
 }
}
</script>

<style>

</style>
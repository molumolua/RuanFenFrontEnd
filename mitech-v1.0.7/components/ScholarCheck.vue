<template>
     <table class="scholar-table">
            <tr class="scholar-tr">
                <th class="scholar-th">申请ID</th>
                <th class="scholar-th">申请人ID</th>
                <th class="scholar-th">申请人姓名</th>
                <th class="scholar-th">申请详情</th>
            </tr>
            <tr class="scholar-tr" v-for="(item, index) in undefinedApplications" :key="index">
                <td class="scholar-td">{{ item.id }}</td>
                <td class="scholar-td">{{ item.sender }}</td>
                <td class="scholar-td">{{ item.sender_name }}</td>
                <td class="scholar-td">
                    <nuxt-link :to="`/scholar-check/${item.id}`" @click="setCheck(item.url)">
                        <p>门户认领pdf的跳转链接</p>
                    </nuxt-link>
                </td>
                <td class="scholar-btn">
                    <button class="check-btn" @click="agree(item)">
                        <span>同意</span>
                    </button>
                    <button class="check-btn" @click="disagree(item)">
                        <span>驳回</span>
                    </button>
                </td>
            </tr>
    </table>
    <p class="scholar-blank" v-if="undefinedApplications.length == 0">暂无申请</p>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        const headers = {
            // 'Content-Type': 'application/json',
            'Authorization': 'token ' + useToken().value
        };
        return {
            checkUrl: 'http://121.36.19.201/api/message/',
            postUrl: 'http://121.36.19.201/api/examine/',
            checks: [],
            headers,
        }
    },
    methods: {
        async getData() {
            await axios.get(this.checkUrl, { headers: this.headers }).then((response) => {
                console.log(response.data);
                this.checks = response.data
            }).catch((error) => {
                console.log(error);
            })
        },
        async postStatus(id, status) {
            const data = {
                data: status,
                mid: id
            }
            await axios.post(this.postUrl, data, { headers: this.headers }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        async agree(item) {
            // item.status = "true"
            item.is_read = true
            await this.postStatus(item.id, 1)
            console.log("agree")
        },
        async disagree(item) {
            // item.status = "false"
            item.is_read = true
            await this.postStatus(item.id, 0)
            console.log("disagree")
        },
        setCheck(url) {
            useCheck().value = url
            setLocal()
        },
    },
    computed: {
        undefinedApplications: function () {
            if (this.checks == null) return []
            return this.checks.filter(function (check) {
                return check.type == 10 && check.is_read == false
            })
        }
    },
    async mounted() {
        await this.getData()
    }
}
/*
     <!-- <div>
        <el-table class="scholar-application-table" :data="scholarApplications" height="250" style="width: 100%">
            <el-table-column prop="applicationID" label="申请ID" width="100" />
            <el-table-column prop="userID" label="申请人ID" width="100" />
            <el-table-column prop="username" label="申请人姓名" width="100" />
            <el-table-column prop="time" label="申请时间" width="180" />
            <el-table-column prop="content" label="申请详情" />
        </el-table>
    </div> -->
*/
</script>

<style>
.scholar-table {
    margin-top: 20px;
}

.scholar-tr {
    margin-top: 10px;
}

.scholar-th {
    width: 180px;
}

.scholar-td {
    width: 180px;
}

.scholar-blank {
    text-align: center;
    width: 1250px;
    margin-top: 20px;
}

.scholar-btn {
    width: 360px;
    text-align: right;
}

.check-btn {
    background-color: #0869d8;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 2px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 15px;
    margin-left: 20px;
}

.check-btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
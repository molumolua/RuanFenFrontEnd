<template>
    <table class="paper-table">
        <tr class="paper-tr0">
            <th class="paper-th">申请ID</th>
            <th class="paper-th">论文标题</th>
            <th class="paper-th">解析人姓名</th>
            <th class="paper-th">解析内容</th>
        </tr>
        <tr class="paper-tr" v-for="(item, index) in undefinedApplications" :key="index">
            <td class="paper-td">{{ item.analysis }}</td>
            <td class="paper-td">{{ item.work_title }}</td>
            <td class="paper-td">{{ item.sender_name }}</td>
            <td class="paper-td">
                <nuxt-link :to="`/paper-check/${item.analysis}`" @click="setCheck(item.analysis_url)">
                    <p>来自{{ item.sender_name }}的解析</p>
                </nuxt-link></td>
            <td class="paper-btn">
                <button class="check-btn" @click="agree(item)">
                    <span>同意</span>
                </button>
                <button class="check-btn" @click="disagree(item)">
                    <span>驳回</span>
                </button>
            </td>
        </tr>
    </table>
    <p class="paper-blank" v-if="undefinedApplications.length == 0">暂无申请</p>
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
            postUrl: 'http://121.36.19.201/api/analysis/examine',
            checks: [],
            headers
        }
    },
    methods: {
        async getData() {
            await axios.get(this.checkUrl, { headers: this.headers }).then((response) => {
                console.log("check:" + response.data);
                this.checks = response.data
            }).catch((error) => {
                console.log(error);
            })
        },
        async postStatus(id, status) {
            const data = {
                message_id: id,
                flag: status
            }
            await axios.post(this.postUrl, data, { headers: this.headers }).then((response) => {
                console.log(response.data);
                // this.check = response.data
            }).catch((error) => {
                console.log(error);
            })
        },
        async agree(item) {
            item.is_read = true
            await this.postStatus(item.id, 1)
            console.log("agree")
        },
        async disagree(item) {
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
                return check.type == 6 && check.is_read == false
            })
        }
    },
    async mounted() {
        await this.getData()
    }
}
</script>

<style>
.paper-table {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.paper-tr0 {
    margin-top: 10px;
    width: 47%;
}

.paper-tr {
    margin-top: 10px;
}

.paper-th {
    width: 180px;
}

.paper-td {
    width: 180px;
}

.paper-blank {
    text-align: center;
    margin-top: 20px;
    width: 93%;
}

.paper-btn {
    width: 180px;
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
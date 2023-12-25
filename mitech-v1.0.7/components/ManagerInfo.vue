<template>
    <table v-if="info" class="manager-table">
        <tr class="manager-tr">
            <th class="manager-th">姓名</th>
            <th class="manager-th">{{ info.username }}</th>
            <th class="manager-th">管理员编号</th>
            <th class="manager-th">{{ info.id }}</th>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            infoUrl: 'http://121.36.19.201/api/info/',
            info: null
        }
    },
    methods: {
        async getManagerInfo() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + useToken().value
            }
            await axios.get(this.infoUrl, { headers }).then((response) => {
                console.log(response.data);
                this.info = response.data
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
            })
        },
    },
    async mounted() {
        await this.getManagerInfo()
    }
}
</script>

<style>
.manager-table {
    margin-top: 10px;
}

.manager-th {
    width: 200px;
    margin-right: 10px;
}
</style>
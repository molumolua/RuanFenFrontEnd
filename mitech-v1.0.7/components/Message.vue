<template>
    <div class="message" :class="{ 'hidden': dataLoaded }">
        <table v-if="messages" class="message-table">
            <tr class="message-tr-head">
                <th class="message-th">消息ID</th>
                <th class="message-th1">消息内容</th>
                <th class="message-button">
                    <button class="message-btn" @click="deleteMessages()">
                        <span>全部删除</span>
                    </button>
                </th>
                <th class="message-button">
                    <button class="message-btn" @click="readMessages()">
                        <span>全部已读</span>
                    </button>
                </th>
            </tr>
            <tr class="message-tr" v-for="(item, index) in userMessages" :key="item.id" @click="markAsRead(index, item.id)">
                <td class="message-td">{{ item.id }}</td>
                <td class="message-td1">{{ item.content }}</td>
                <td class="message-button">
                    <button class="message-btn1" @click="deleteMessage(item.id)">
                        <span>删&emsp;除</span>
                    </button>
                </td>
                <td class="message-button">
                    <button class="message-btn1" @click="readMessage(item.id)">
                        <span>已&emsp;读</span>
                    </button>
                </td>
                <div class="unreadFlag" :class="{ 'hidden': item.is_read }"></div>
            </tr>
        </table>
    </div>
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
            deleteUrl: 'http://121.36.19.201/api/message/remove',
            readUrl: 'http://121.36.19.201/api/message/read',
            messages: [],
            headers,
            dataLoaded: true
        }
    },
    methods: {
        async getData() {
            await axios.get(this.checkUrl, { headers: this.headers }).then((response) => {
                console.log(response.data);
                this.messages = response.data
                this.dataLoaded = false
            }).catch((error) => {
                console.log(error);
            })
        },
        markAsRead(index, id) {
            // this.messages[index].is_read = true
            this.readMessage(id)
        },
        deleteMessages() {
            const oldMessages = this.userMessages
            var data = {}
            this.messages = []
            oldMessages.forEach((item) => {
                if (item.type == 6 || item.type == 10)
                data = {
                    message_id: item.id
                }
                axios.post(this.deleteUrl, data, { headers: this.headers }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            })
        },
        deleteMessage(id) {
            console.log(id);
            const index = this.messages.findIndex(item => item.id === id);
            if (index !== -1) {
                // 使用 Vue.delete 删除数组中的元素
                this.messages.splice(index, 1)
            }
            const data = {
                message_id: id
            }
            axios.post(this.deleteUrl, data, { headers: this.headers }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        readMessages() {
            var data = {}
            this.userMessages.forEach((item) => {
                item.is_read = true
                data = {
                    message_id: item.id
                }
                axios.post(this.readUrl, data, { headers: this.headers }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            })
        },
        readMessage(id) {
            console.log(id);
            const index = this.messages.findIndex(item => item.id === id);
            if (index !== -1) {
                // 使用 Vue.delete 删除数组中的元素
                this.messages[index].is_read = true
            }
            const data = {
                message_id: id
            }
            axios.post(this.readUrl, data, { headers: this.headers }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        put() {
            console.log(this.messages);
        },
        // goto() {
        //     const article = 'articleDetail'
        //     this.$router.push(article)
        // }
    },
    computed: {
        userMessages: function () {
            if (this.messages == [] || this.messages == null) return []
            return this.messages.filter(function (message) {
                return message.type != 10 && message.type != 6
            })
        }
    },
    async mounted() {
        await this.getData()
    }
}
</script>

<style>
.message {
    display: flex;
    justify-content: center;
    align-items: center;
}

.message-table {
    margin-top: 20px;
}

.message-tr-head {
    margin-top: 40px;
    border-bottom: 3px solid #ccc;
    cursor: pointer;
}

.message-tr {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}

.message-th {
    width: 250px;
}

.message-td {
    width: 250px;
}

.message-th1 {
    width: 600px;
}

.message-td1 {
    width: 600px;
}

.unreadFlag {
    position: relative;
    display: inline-block;
}

.unreadFlag::before {
    content: "";
      position: absolute;
      top: -15px;
      right: 10px;
      width: 7px;
      height: 7px;
      background-color: rgb(223, 6, 6);
      border-radius: 50%;
      transition: background-color 0.3s ease;
}

.hidden {
  display: none;
}

.message-button {
    padding-bottom: 5px;
}

.message-btn {
    background-color: #1a77e2d3;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 2px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 8px;
    width: 80px;
    height: 40px;
    margin-right: 25px;
}

.message-btn:hover {
    box-shadow: 0 12px 16px 0 rgba(107, 105, 105, 0.24),0 17px 50px 0 rgba(131, 127, 127, 0.19);
}

.message-btn1 {
    background-color: #1a77e2d3;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 2px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 8px;
    width: 80px;
    height: 40px;
}

.message-btn1:hover {
    box-shadow: 0 12px 16px 0 rgba(107, 105, 105, 0.24),0 17px 50px 0 rgba(131, 127, 127, 0.19);
}
</style>
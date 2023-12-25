<template>
    <div>
        解析标题：
        <input
          class="a-input"
          type="text"
          v-model="title_analysis"
        />
        <input
          type="file"
          ref="fileInput"
          style="display: none"
          @change="handleFileChange"
        />
        <button class="btn" @click="triggerFileInput">上传.md文件</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        openalex_id: {
            type: String
        },
        title: {
            type: String
        },
        cited_by_count: {
            type: Number
        }
    },
    data() {
        return {
            uploadUrl: 'http://121.36.19.201/api/analysis/create',
            title_analysis: ''
        }
    },
    methods: {
        async uploadFile(file) {
            console.log("upload file");
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'token ' + useToken().value
            }
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('openalex_id', this.openalex_id)
                formData.append('title_analysis', this.title_analysis)
                formData.append('title', this.title)
                formData.append('cited_by_count', this.cited_by_count)
                // 使用 Axios 上传文件
                const response = await axios.post(this.uploadUrl, formData, { headers });

                // 处理上传成功后的逻辑
                console.log('File uploaded successfully:', response.data);
                this.title_analysis = ''
            } catch (error) {
                // 处理上传失败的逻辑
                console.error('File upload failed:', error);
            }
        },
        triggerFileInput() {
            // 触发文件选择框
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.uploadFile(file);
            }
        },
    },
    mounted() {
        getLoacl()
        console.log(this.$props);
    }
}
</script>

<style scoped>
.a-input {
    width: 120px;
    margin-right: 10px;
}

.btn {
    background-color: #1a77e2d3;
    border: none;
    color: white;
    padding: 0px 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 2px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 8px;
    width: 120px;
    height: 45px;
}

.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(107, 105, 105, 0.24),0 17px 50px 0 rgba(131, 127, 127, 0.19);
}
</style>
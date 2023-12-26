<template>
    <div class="main-container">
      <Header />
      <div>
        <div class="PersonTop">
          <div class="PersonTop_img">
            <img v-image-preview src="@/assets/img/defaultavatar.png" v-if="avatar_url==''"/>
            <el-avatar shape="square" :size="150" fit="cover" :src="avatar_url" v-else />
          </div>
          <div class="PersonTop_text">
            <div class="user_text">
              <div class="user_name">
                <span>{{ name }}</span>
              </div>
              <div class="user_workplace">
                <span>WorkPlace:&nbsp;{{ last_known_institution }}</span>
              </div>
              <div class="user_workplace" v-if="avatar_url != ''">
              <img src="@/assets/img/authentication.png" class="user-v-img" />
              <span class="user-v-font">已认证学者</span>
            </div>
              <div class="hero-button mt-30" v-if="useToken().value != ''">
                <button class="ht-btn ht-btm-md" @click="follow" v-if="isfollowed == false">Follow</button>
                <button class="ht-btn ht-btm-md" @click="unfollow" v-else>UnFollow</button>
              </div>
            </div>
            <div class="user_num">
              <div style="cursor: pointer" @click="myfan">
                <div class="num_number">{{work_count}}</div>
                <span class="num_text">Published</span>
              </div>
            </div>
            <div class="user_num">
              <div style="cursor: pointer" @click="myfan">
                <div class="num_number">{{cited_by_count}}</div>
                <span class="num_text">Cited</span>
              </div>
            </div>
          </div>
        </div>
        <div class="person_body">
          <div class="person_body_left">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <div slot="header" class="clearfix">
                <span class="person_body_list" style="border-bottom: none">Resercher Info</span>
              </div>
              <el-menu active-text-color="#00c3ff" class="el-menu-vertical-demo">
                <el-menu-item>
                  <NuxtLink :to="`/scientist/sciinfo`">
                    <el-icon><User /></el-icon>
                    <span slot="title">Introduction</span>
                  </NuxtLink>
                </el-menu-item>
                <el-menu-item>
                  <NuxtLink :to="`/scientist/scipaper`">
                    <el-icon><Document /></el-icon>
                    <span slot="title">Published Paper</span>
                  </NuxtLink>
                </el-menu-item>
                <el-menu-item v-if="avatar_url == ''">
                  <el-icon><StarFilled /></el-icon>
                    <span slot="title" @click="edit" >门户认领</span>
                </el-menu-item>
              </el-menu>
            </el-card>
          </div>
          <div class="person_body_right">
            <NuxtPage />
          </div>
        </div>
      </div>
      <ClientOnly>
      <el-dialog title="Modify Personal Info" v-model="dialogVisible" width="60%" :before-close="handleClose" draggable>
        <el-form :model="user" label-width="150px" size="large">
          <div class="updateinfo">
            <div class="left">
              <el-form-item label="Avatar" prop="username">
                <div class="div-label"><label>Please select one of your <span style="font-weight: bold; font-size: large;">ID photos.</span></label></div>
                <input type="file" @change="uploadImage" accept="image/*"> 
              </el-form-item>
              <el-form-item label="PDF" prop="username">
                <div class="div-label"><label>Please change Form.doc into <span style="font-weight: bold; font-size: large;">PDF</span> and upload it.</label></div>
                <input type="file" @change="uploadPDF" accept=".pdf">
              </el-form-item>
              <el-form-item label="Download Template" prop="id">
                <div class="div-label"><label>Please download the <span style="font-weight: bold; font-size: large;">application form template</span> before uploading your documents</label></div>
                <a href="/111.doc" download="111.doc" class="ht-btn ht-btm-md">DOWNLOAD</a>
              </el-form-item>
            </div>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <button class="ht-btn ht-btm-md btn--white" @click="handleClose">Cancel</button>
          <button class="ht-btn ht-btm-md" @click="submit">Submit</button>
        </span>
      </el-dialog>
    </ClientOnly>
      <Footer />
    </div>
  </template>
  
  <script>
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  const nuxtApp = useNuxtApp()
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
  }
  import axios from "axios";
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
  export default {
    components: {
      Header,
      Footer,
      OffCanvasMobileMenu,
    },
    mounted(){
      getLoacl();
      this.load();
      this.load_avatar();
      if(useToken().value != null) {
        this.load_follow()
      }
    },
    name: "Person",
    data() {
      return {
        avatar_url: "",
        file1: null,
        file2: null,
        isfollowed: false,
        dialogVisible: false,
        id: "",
        name: "",
        work_count: Number,
        cited_by_count: Number,
        last_known_institution: "",
        scientists: [],
        user: {
        }
      };
    },
    methods: {
      async load() {
        console.log(useSCIid().value)
      const headers = {
        'Content-Type': 'application/json',
      };
      const postData = {
        'single_object_id': useSCIid().value,
      };
      data = await axios.post('http://121.36.19.201/api/get_authors/', postData, { headers }).then((response) => {
        console.log(response.data);
        this.id = response.data.id
        this.name = response.data.display_name
        this.work_count = response.data.works_count
        this.cited_by_count = response.data.cited_by_count
        this.last_known_institution = response.data.last_known_institution.display_name
      }).catch((error) => {
        console.log(error);
      })
    },
    async load_avatar() {
      console.log("SCI" + useSCIid().value)
      const headers = {
        'Content-Type': 'application/json',
      };
      const postData = {
        'open_alex_id': useSCIid().value,
      };
      data = await axios.post('http://121.36.19.201/api/get_author_avatar/', postData, { headers }).then((response) => {
        console.log(response.data);
        this.avatar_url = response.data.url
      }).catch((error) => {
        console.log(error);
      })
    },
    async load_follow() {
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + useToken().value
      };
      data = await axios.get('http://121.36.19.201/api/get_follow/', { headers }).then((response) => {
        console.log(response.data);
        this.scientists = response.data
        for(var i = 0; i < this.scientists.length;++i) {
          if(this.scientists[i].author.open_alex_id == useSCIid().value) {
            this.isfollowed = true
          }
        }
      }).catch((error) => {
        console.log(error);
      })
      },
      follow() {
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + useToken().value
      };
      const postData = {
        'openalex_id': this.id,
        'real_name': this.name,
        'work_count': this.work_count,
        'institution_display_name': this.last_known_institution
      };
      data = axios.post('http://121.36.19.201/api/create_follow/', postData, { headers }).then((response) => {
        console.log(response.data)
        this.isfollowed = true
      }).catch((error) => {
        console.log(error);
      })
      },
      unfollow() {
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + useToken().value
      };
      const postData = {
        'author_id': this.id,
      };
      data = axios.post('http://121.36.19.201/api/revoke_follow/', postData, { headers }).then((response) => {
        console.log(response.data)
        this.isfollowed = false
      }).catch((error) => {
        console.log(error);
      })
      },
      edit() {
      this.dialogVisible = true;
    },
    uploadImage(event) {  
      this.file1 = event.target.files[0];  
      console.log("222")
      if(this.file1 === undefined){
        console.log("undefined")
      }
      else{
        console.log(this.file1);
      }
    },
    uploadPDF(event) {  
      this.file2 = event.target.files[0];  
      if(this.file2 === undefined){
        console.log("undefined")
      }
      else{
        console.log(this.file2);
      }
    },
      async submit() {
        const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'token '+ useToken().value
      };
      const postData = {
        'image': this.file1,
        'pdf': this.file2,
        'real_name': this.name,
        'work_count': this.work_count,
        'created_time': '1111',
        'institution_display_name': this.last_known_institution,
        'openalex_id': this.id
      };
      await axios.post('http://121.36.19.201/api/uploadconfirm/',postData, {headers}).then((response) => {
        console.log(response.data);
        this.dialogVisible = false
      }).catch((error) => {
        console.log(error);
      })
    },
    handleClose() {
      this.dialogVisible = false;
    },
  },
}
  </script>
  
  <style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }
  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
  .me-video-player {
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: fixed;
  left: 0;
  z-index: 0;
  top: 0;
  }
  .PersonTop {
  width: 1000px;
  height: 20px;
  padding-top: 20px;
  background-color: white;
  margin-top: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border-radius: 5px;
  }
  .PersonTop_img {
  width: 150px;
  height: 120px;
  background-color: #8c939d;
  margin-right: 24px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 20px;
  }
  .PersonTop_img img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  }
  .PersonTop_text {
  height: 120px;
  width: 880px;
  display: flex;
  }
  .user_text {
  width: 60%;
  height: 100%;
  line-height: 30px;
  }
  .user_name {
    font-size: 30px;
color: #333;
  font-weight: bold;
  }
  .user_workplace {
  font-weight: bold;
  }
  .user-v {
  margin-bottom: -5px;
  }
  .user-v-img {
  width: 15px;
  height: 15px;
  }
  .user-v-font {
  font-size: 15px;
  color: black;
  }
  .user_qianming {
  font-size: 14px;
  color: #999;
  }
  .user_num {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  }
  .user_num > div {
  text-align: center;
  border-right: 1px dotted #999;
  box-sizing: border-box;
  width: 80px;
  height: 40px;
  line-height: 20px;
  }
  .num_text {
  color: #999;
  }
  .num_number {
  font-size: 20px;
  color: #333;
  }
  .el-menu-item>span {
  font-size: 16px;
  color: #999;
  }
  .person_body {
  width: 1000px;
  margin-top: 210px;
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  }
  .person_body_left {
  width: 27%;
  height: 600px;
  border-radius: 5px;
  margin-right: 3%;
  text-align: center;
  }
  .person_body_list {
width: 100%;
height: 50px;
margin-top: 25px;
font-size: 22px;
border-bottom: 1px solid black;
font-weight: 500;
  }
  .el-menu-item {
  margin-top: 22px;
  }
  .person_body_right {
  width: 70%;
  border-radius: 5px;
  background-color: white;
  }
  .box-card {
  height: 500px;
  }
  .el-button {
  width: 84px;
  }
  .updateinfo {
      height: 350px;
      overflow: auto;
  }
  .left {
    float: left;
  }
  .right {
    overflow:scroll;
  }
  .div-label {
    width: 100%;
  }
  </style>
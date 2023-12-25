<template>
  <div class="main-container">
    <Header />
    <div>
      <div class="PersonTop">
        <el-popconfirm
          width="220"
          confirm-button-text="是"
          cancel-button-text="不了,谢谢"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="你要修改头像吗?"
          style="font-size: 30px;"
          @confirm="modify"
        >
          <template #reference>
            <div class="hover-shadow">
              <img v-image-preview src="@/assets/img/defaultavatar.png" v-if="user.avatar_url==''"/>
              <img v-image-preview :src="user.avatar_url" v-else/>
              <input type="file" style="display: none;" @change="uploadImage" accept="image/*">  
            </div>
          </template>
        </el-popconfirm>
        <div class="PersonTop_text">
          <div class="user_text">
            <div class="user_name">
              <span>{{user.username}}</span>
            </div>
            <div class="user-v" v-if="user.is_professor">
              <img src="@/assets/img/authentication.png" class="user-v-img" />
              <span class="user-v-font">科研工作者</span>
            </div>
            <div class="hero-button mt-30">
              <button class="ht-btn ht-btm-md" @click="edit">Modify Personal Info</button>
            </div>
          </div>
          <div class="user_num" v-if="user.is_professor">
            <div style="cursor: pointer" @click="myfan">
              <div class="num_number">{{ user.work_count }}</div>
              <span class="num_text">已发表论文</span>
            </div>
          </div>
        </div>
      </div>
      <div class="person_body">
        <div class="person_body_left">
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span class="person_body_list" style="border-bottom: none">Personal Center</span>
            </div>
            <el-menu active-text-color="#00c3ff" class="el-menu-vertical-demo" style="overflow: auto; max-height: 500px;">
              <el-menu-item>
                <NuxtLink :to="`/person/info`">
                  <el-icon><UserFilled /></el-icon>
                  <span slot="title">Profile</span>
                </NuxtLink>
              </el-menu-item>
              <el-menu-item v-if="user.is_professor">
                <NuxtLink :to="`/person/myarticle`">
                  <el-icon><Document /></el-icon>
                  <span slot="title">Paper</span>
                </NuxtLink>
              </el-menu-item>
              <el-menu-item>
                <NuxtLink :to="`/person/history`">
                  <el-icon><Document /></el-icon>
                  <span slot="title">History</span>
                </NuxtLink>
              </el-menu-item>
              <el-menu-item>
                <NuxtLink :to="`/person/myfollow`">
                  <el-icon><User /></el-icon>
                  <span slot="title">Follow List</span>
                </NuxtLink>
              </el-menu-item>
              <el-sub-menu @click="open">
                <template #title>
                  <el-icon><Folder /></el-icon>
                  <span slot="title">Favorite</span>
                </template>
                <el-menu-item v-for="a in collection" :key="a.id" v-bind="a">
                  <NuxtLink :to="`/person/mycollection`">
                    <el-icon><Folder /></el-icon>
                    <span slot="title">{{a.name}}</span>
                  </NuxtLink>
                </el-menu-item>
                <el-menu-item @click="createCollection">
                  <el-icon><Plus /></el-icon>
                  <span slot="title">Create new Favorite</span>
                </el-menu-item>
              </el-sub-menu>
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
        <el-form :model="user" :rules="rules_1" ref="user" label-width="150px" size="large">
          <div class="updateinfo">
            <div class="left">
              <el-form-item label="User_name" prop="username">
                <el-input v-model="user.username" placeholder="User_name" clearable></el-input>
              </el-form-item>
              <el-form-item label="Last_name" prop="last_name">
                <el-input v-model="user.last_name" placeholder="Last_name" clearable></el-input>
              </el-form-item>
              <el-form-item label="First_name" prop="first_name">
                <el-input v-model="user.first_name" placeholder="First_name" clearable></el-input>
              </el-form-item>
              <el-form-item label="Gender" prop="gender">
                <el-switch v-model="user.gender" active-color="#AAAAAA" inactive-color="#AAAAAA" inline-prompt active-text="Male" inactive-text="Female" :active-value= "男" :inactive-value= "女"></el-switch>
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input v-model="user.email" placeholder="Email" clearable></el-input>
              </el-form-item>  
            </div>
            <div class="right">
              <el-form-item label="User_id" prop="id">
                <el-input v-model="user.id" disabled></el-input>
              </el-form-item>
              <el-form-item label="Signature" prop="description">
                <el-input v-model="user.description" placeholder="Signature" :autosize="{ minRows: 1, maxRows:4 }" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="PhoneNumber" prop="phone_number">
                <el-input v-model="user.phone_number" placeholder="PhoneNumber" clearable></el-input>
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
    <ClientOnly>
      <el-dialog title="新建文件夹" v-model="dialogVisible_new" width="60%" :before-close="handleClose_new" draggable>
        <el-form :model="new_collection" :rules="rules_2" ref="form" label-width="150px" size="large">
          <div class="updateinfo">
            <el-form-item label="文件夹名字" prop="name">
              <el-input v-model="new_collection.name" placeholder="文件夹名字" clearable></el-input>
            </el-form-item>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <button class="ht-btn ht-btm-md btn--white" @click="handleClose_new">取消</button>
          <button class="ht-btn ht-btm-md" @click="submit_new">提交</button>
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
// import radarChart from '@/components/radarChart.vue';
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    OffCanvasMobileMenu,
    // radarChart
  },
  name: "Person",
  data() {
    return {
      dialogVisible: false,
      dialogVisible_new: false,
      user: {
        id: Number,
        password: "",
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        gender: "",
        description: "",
        avatar_url: "",
        work_count: Number,
        is_professor: Boolean,
      },
      new_collection: {
        name: "",
      },
      rules_1: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        email: [
          { required: true, message: "E-mail不能为空", trigger: "blur" },
        ],
      },
      rules_2: {
        name: [
          { required: true, message: "文件夹名字不能为空", trigger: "blur"},
        ]
      },
      collection: [],
    };
  },
  mounted() {
    getLoacl()
    console.log("Token")
    console.log(useToken().value)
    this.load()
    this.load_collection()
  },
  methods: {
    async load() {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
      await axios.get('http://121.36.19.201/api/info/', { headers }).then((response) => {
        console.log(response.data);
        this.user.id = response.data.id
        this.user.username =  response.data.username
        this.user.first_name =  response.data.first_name
        this.user.last_name =  response.data.last_name
        this.user.email =  response.data.email
        this.user.phone_number =  response.data.phone_number
        this.user.gender =  response.data.gender
        this.user.description = response.data.description
        this.user.avatar_url = response.data.avatar_url
        this.user.work_count =  response.data.work_count
        this.user.is_professor = response.data.is_professor
      }).catch((error) => {
        console.log(error);
      })
    },
    async load_collection() {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
      await axios.get('http://121.36.19.201/api/getCollectionPackage/', { headers }).then((response) => {
        this.collection = response.data
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      })
    },
    edit() {
      this.dialogVisible = true;
    },
    async submit() {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
      const postData = {
        
      };
      await axios.post('http://121.36.19.201/api/editinfo/', postData, { headers }).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      })
      this.dialogVisible = false;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    follow() {

    },
    createCollection() {
      this.dialogVisible_new = true;
    },
    async submit_new() {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'token '+useToken().value
      };
      const postData = {
        'name': this.new_collection.name
      };
      data = await axios.post('http://121.36.19.201/api/createCollectionPackage/', postData, { headers }).then((response) => {
        console.log(response.data);
        this.load_collection()
        this.dialogVisible_new = false;
      }).catch((error) => {
        console.log(error);
      })
    },
    handleClose_new() {
      this.dialogVisible_new = false;
    },
    modify(){
      console.log("点击了")
      document.querySelector('input[type="file"]').click();
    },
    uploadImage(event) {  
      const file = event.target.files[0];  
      if(file === undefined){
        console.log("undefined")
      }
      else{
        console.log("马上提交");
        this.submitImg(file)
      }
    },  
    async submitImg(file) {
      console.log("提交中")
      const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'token '+ useToken().value
      };
      const postData = {
        'image': file,
      };
      console.log(postData.image)
      await axios.post('http://121.36.19.201/api/uploadimage/',postData, {headers}).then((response) => {
        console.log(response.data);
        this.load();
      }).catch((error) => {
        console.log(error);
      })
    }
  },
};
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
height: 10px;
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
border-bottom: 1px solid #f0f0f0;
background-image: -webkit-linear-gradient(
    left,
    rgb(42, 134, 141),
    #e9e625dc 20%,
    #3498db 40%,
    #e74c3c 60%,
    #09ff009a 80%,
    rgba(82, 196, 204, 0.281) 100%
);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-background-size: 200% 100%;
-webkit-animation: masked-animation 4s linear infinite;
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
overflow: auto;
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
  overflow: hidden;
}
.hover-shadow {  
  width: 150px;
  height: 120px;
  background-color: #8c939d;
  margin-right: 24px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 20px;
  object-fit: cover;  
  border-radius: 50%;  
  box-shadow: none; /* 移除默认的阴影 */ 
}  
.hover-shadow img {
width: 100%;
height: 100%;
border-radius: 20px;
}
.hover-shadow:hover {  
  /* 悬停时的阴影效果 */  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 可以根据需要调整阴影的颜色、模糊距离等 */  
}  
</style>
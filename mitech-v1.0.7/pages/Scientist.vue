<template>
    <div class="main-container">
      <Header />
      <div>
        <div class="PersonTop">
          <div class="PersonTop_img">
            <!-- <img v-image-preview :src="avatar" /> -->
          </div>
          <div class="PersonTop_text">
            <div class="user_text">
              <div class="user_name">
                <span>科研人员姓名</span>
              </div>
              <div class="user-v">
                <img src="@/assets/img/authentication.png" class="user-v-img" />
                <span class="user-v-font">科研工作者</span>
              </div>
              <div class="user_name">
                <span>工作单位：</span>
              </div>
              <div class="hero-button mt-30">
                <button class="ht-btn ht-btm-md" @click="edit">关注</button>
            <!-- <el-button
              class="el-icon-edit"
              type="primary"
              size="medium"
              plain
              @click="edit"
              >编辑</el-button
            > -->
            <!-- <el-button
              @click="follow"
              type="primary"
              size="medium"
              icon="el-icon-check"
              v-text="
                isfollowid.indexOf(this.$route.params.id) > -1
                  ? '已关注'
                  : '关注'
              "
            ></el-button> -->
              </div>
            </div>
            <div class="user_num">
              <div style="cursor: pointer" @click="myfan">
                <div class="num_number">114514</div>
                <span class="num_text">已发表论文</span>
              </div>
            </div>
            <div class="user_num">
              <div style="cursor: pointer" @click="myfan">
                <div class="num_number">114514</div>
                <span class="num_text">被引数</span>
              </div>
            </div>
          </div>
        </div>
        <div class="person_body">
          <div class="person_body_left">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <div slot="header" class="clearfix">
                <span class="person_body_list" style="border-bottom: none">个人中心</span>
              </div>
              <el-menu active-text-color="#00c3ff" class="el-menu-vertical-demo">
                <el-menu-item>
                  <NuxtLink :to="`/scientist/sciinfo`">
                    <el-icon><User /></el-icon>
                    <span slot="title">个人简介</span>
                  </NuxtLink>
                </el-menu-item>
                <el-menu-item>
                  <NuxtLink :to="`/scientist/scipaper`">
                    <el-icon><Document /></el-icon>
                    <span slot="title">发表论文</span>
                  </NuxtLink>
                </el-menu-item>
              </el-menu>
            </el-card>
          </div>
          <div class="person_body_right">
            <NuxtPage />
          </div>
        </div>
      </div>
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
  export default {
    components: {
      Header,
      Footer,
      OffCanvasMobileMenu,
    },
    mounted(){
      getLoacl()
    },
    name: "Person",
    data() {
      return {
        dialogVisible: false,
        form: {
          avatar: "",
          password: "",
          nickname: "",
          age: "",
          email: "",
          mobilePhoneNumber: "",
          sex: "",
          id: "",
          account: "",
          area: "",
          hobby: "",
          work: "",
          design: "",
        },
        rules: {
          nickname: [
            { required: true, message: "昵称不能为空", trigger: "blur" },
          ],
          password: [
            { required: true, message: "账号密码不能为空", trigger: "blur" },
          ],
        },
        avatar: "",
        nickname: "",
        v: 1,
        design: "",
        followCounts: "",
        fanCounts: "",
        goodCounts: "",
        isfollow: true,
        followData: {
          fanId: "",
          followId: "",
        },
        isfollowid: [],
      };
    },
    methods: {
      async load() {
      const headers = {
        'Content-Type': 'application/json',
      };
      data = await axios.get('http://121.36.19.201/api/get_authors/', { headers }).then((response) => {
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
    overflow: hidden;
  }
  </style>
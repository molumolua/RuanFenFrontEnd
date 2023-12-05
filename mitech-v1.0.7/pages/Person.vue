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
              <span>  nickname  </span>
            </div>
            <div class="user-v">
              <!-- <img src="@/assets/img/V.png" class="user-v-img" /> -->
              <span class="user-v-font">科研工作者</span>
            </div>
            <div class="hero-button mt-30">
              <!-- <el-button
                class="el-icon-edit"
                type="primary"
                size="medium"
                plain
                @click="edit"
                >编辑</el-button
              > -->
              <button class="ht-btn ht-btm-md" @click="edit">编辑个人信息</button>
              <button class="ht-btn ht-btm-md">关注</button>
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
              <div class="num_number">{{ fanCounts }}</div>
              <span class="num_text">粉丝</span>
            </div>
            <div style="cursor: pointer" @click="myfollow">
              <div class="num_number">{{ followCounts }}</div>
              <span class="num_text">关注</span>
            </div>
            <div>
              <div class="num_number">{{ goodCounts }}</div>
              <span class="num_text">获赞</span>
            </div>
          </div>
        </div>
      </div>
      <div class="person_body">
        <div class="person_body_left">
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span class="person_body_list" style="border-bottom: none"
                >个人中心</span
              >
            </div>
            <!-- <div
              class="person_body_list"
              v-for="(item, index) in person_body_list"
              :key="index"
            >
              <router-link :to="{ name: item.name, params: item.params }">{{
                item.label
              }}</router-link>
            </div> -->
            <el-menu
              router
              active-text-color="#00c3ff"
              class="el-menu-vertical-demo"
            >
              <el-menu-item>
                <NuxtLink to="/person/info">
                  <el-icon><User /></el-icon>
                  <span slot="title">个人简介</span>
                </NuxtLink>
              </el-menu-item>
              <el-menu-item>
                <NuxtLink to="/person/myarticle">
                  <el-icon><Document /></el-icon>
                  <span slot="title">发表论文</span>
                </NuxtLink>
              </el-menu-item>
              <el-menu-item>
                <NuxtLink to="/person/mycollection">
                  <el-icon><Folder /></el-icon>
                  <span slot="title">收藏</span>
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
    <ClientOnly>
      <el-dialog
        title="修改个人信息"
        v-model="dialogVisible"
        width="60%"
        :before-close="handleClose">
        <el-form :model="form" :rules="rules" ref="form" label-width="150px">
          <div class="updateinfo">
            <div class="left">
              <el-form-item label="头像" prop="avatar">
                <el-upload
                  class="avatar-uploader"
                  action="111"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
              </el-form-item>
              <el-form-item label="账号密码" prop="password">
                <el-input v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickname">
                <el-input v-model="form.nickname"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-input v-model="form.age"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-switch
                  v-model="form.sex"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="男"
                  inactive-text="女"
                  :active-value= "男"
                  :inactive-value= "女"
                ></el-switch>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>  
            </div>
            <div class="right">
              <el-form-item label="用户编号" prop="id">
                <el-input v-model="form.id" disabled></el-input>
              </el-form-item>
              <el-form-item label="账号" prop="account">
                <el-input v-model="form.account" disabled></el-input>
              </el-form-item>
              <el-form-item label="地区" prop="area">
                <el-input v-model="form.area"></el-input>
              </el-form-item>
              <el-form-item label="兴趣爱好" prop="hobby">
                <el-input v-model="form.hobby"></el-input>
              </el-form-item>
              <el-form-item label="职业" prop="work">
                <el-input v-model="form.work"></el-input>
              </el-form-item>
              <el-form-item label="个性签名" prop="design">
                <el-input v-model="form.design"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="mobilePhoneNumber">
                <el-input v-model="form.mobilePhoneNumber"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <button class="ht-btn ht-btm-md btn--white" @click="handleClose">取消</button>
          <button class="ht-btn ht-btm-md" @click="submit">提交</button>
        </span>
      </el-dialog>
    </ClientOnly>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import PersonMain from '@/components/PersonMain.vue';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import PersonDia from '@/components/PersonDia.vue';
export default {
  components: {
    Header,
    PersonMain,
    Footer,
    OffCanvasMobileMenu,
    PersonDia
  },
  name: "PersonMain",
  inject: ["reload"],
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
    edit() {
      this.dialogVisible = true;
    },
    submit() {
      this.dialogVisible = false;
    },
    handleClose() {
      this.dialogVisible = false;
      this.$emit("flesh");
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
color: #00c3ff;
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
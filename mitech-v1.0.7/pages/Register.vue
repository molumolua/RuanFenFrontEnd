<template>
    <div class="full-screen-background">
        <div class="container" style="transform: scale(1.25);">
            <div class="row align-items-center" style="padding-top: 200px;">
                <div class="col-lg-7">
                    <div class="image">
                        <img class="img-fluid" src="/images/login/login.png" alt="image">
                    </div>
                </div>    
                <div class="business-solution-form-wrap me-auto ms-auto">
                    <div class="contact-title text-center section-space--mb_40">
                        <h5 class="mb-10">账号注册</h5>
                        <p class="text">欢迎来到SCHOLIGHT</p>
                    </div>
                    <form method="post">
                        <div class="contact-form__two">
                            <div class="contact-inner">
                                <input v-model="form.name" name="name" type="text" placeholder="用户名 *">
                                <p v-show="noName == 'true'" class="text" style="color: red;">用户名不能为空</p>
                                <p v-show="sameUserName == 'true'" class="text" style="color: red;">用户名重复</p>
                            </div>
                            <div class="contact-inner">
                                <input v-model="form.password" name="email" type="password" placeholder="密码 *">
                                <p v-show="noPassWord == 'true'" class="text" style="color: red;">密码不能为空</p>
                            </div>
                            
                            <div class="comment-submit-btn text-center">
                                <button class="ht-btn ht-btn-custom" type="button" @click="handleClickRegister">注册</button>
                            </div>
                        </div>
                    </form>
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'register',
        setup(){
            const instance = getCurrentInstance();

            let _this = null

            if (instance != null) {
                _this = instance.appContext.config.globalProperties //vue3获取当前this
            }
            let form = reactive({
                name: "",
                password: "",
            })
            let noName = ref('false')
            let noPassWord = ref('false')
            let sameUserName = ref('false')
            let url = "http://121.36.19.201/api/register/"
            const handleClickRegister = () => {
                noName.value = 'false';
                noPassWord.value = 'false';
                if (!form.name) {
                    noName.value = 'true';
                } else if (!form.password) {
                    noPassWord.value = 'true'
                }else{
                    handleRegister();
                }
            }
            const handleRegister = () => {
                getData();
            }
            const getData = async () => {  
                    console.log("url:" + url);
                    const headers = {
                        'username': form.name,
                        'password': form.password,
                    };  
                    console.log(headers);
                    await axios.post(url, headers).then((response) => {
                        sameUserName.value = 'false'
                        console.log(response.data);
                        _this.$router.push('/login');
                    }).catch((error) => {
                        sameUserName.value = 'true'
                    })
            }
            
            return{
                form,
                noName,
                noPassWord,
                sameUserName,
                url,
                handleClickRegister,
                handleRegister,
                getData
            }
        }
    };
</script>
<style>  
.full-screen-background {  
  background-image: url('/images/login/320.png'); /* 替换为你的图片路径 */  
  background-repeat: no-repeat;  
  background-size: cover;  
  background-position: center center;  
  height: 100vh; /* 设置高度为视口高度 */  
  width: 100%; /* 设置宽度为100% */  
}  

.form-area {
  width: 400px;
  /*height: 400px;*/
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
</style>
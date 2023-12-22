<template>
    <div class="box">
      <div class="top">
        <span>AI Assistant</span>
      </div>
      <ul class="center" ref="center">
        <li
          v-for="item in AIMessageList"
          :key="item.id"
          :class="{ 'mySay': item.role ==='user' }"
        >
          <!-- <img :src="list.image" alt="" v-if="item.sendid === this.$store.state.userid " /> -->
          <div class="line">

            <div class="friend_avatar" v-if="item.role!='user'">
              <img class="avatar" :src="AIavatar">
            </div>
            <div class="friend_content" v-if="item.role!='user'">
              <span  class="title">{{ " "+item.role}} <br/></span>
              <div  class="content" >{{ item.content }}</div>
            </div>

            <div class="my_avatar" v-if="item.role ==='user'">
              <img class="avatar" :src="Useravatar">
            </div>
            <div class="my_content" v-if="item.role ==='user'">
              <span  class="title">{{ " "+item.role}} <br/></span>
              <div  class="content" >{{ item.content }}</div>
            </div>


          </div>
          <!-- <img
            :src="this.$store.state.image"
            alt=""
            v-if="item.sendid !== this.$store.state.userid "
          /> -->
        </li>
      </ul>
      <div class="bottom">
        <input
          id="myInput"
          type="text"
          placeholder="请输入内容"
          v-model="input"
          @keydown.enter="send()"
          class="inp"
          ref="myinp"
        />
        <button class="btn" @click="send()">发送(S)</button>
      </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    mounted() {
    },
    data () {
        return {
            AIMessageList:useAIMessageList().value,  
            AIavatar:"/images/avator/AIavator.png",
            Useravatar:"/images/avator/user-default.png"
        }
    },
    methods:{
        send(){
            console.log("send!!")
            var message={
                "role":"user",
                "content":document.getElementById("myInput").value
            }
            document.getElementById("myInput").value=""
            this.$data.AIMessageList.push(message)
            var address="https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token="+useAccessToken().value
            const postData={
                "messages":JSON.parse(JSON.stringify(this.$data.AIMessageList))
            }
            console.log(postData)
            axios.post(address,postData,{
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) =>{
                console.log(response)
                var message={
                    "role":"assistant",
                    "content":response.data.result
                }
                this.$data.AIMessageList.push(message)
            }).catch(error =>{
                console.log("get ERROR in AIchat ",error)
            })
        }
    }

}
</script>
<style lang="scss" scoped>
img{
  height: 80px;
}
.box {
  float: left;
  width: 800px;
  //height: 700px;
   .top {
    width: 100%;
    height: 40px;
    padding: 0.05rem 0.1rem;
    font-size:20px;
    background-color: gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    i {
      text-align: center;
      font-size: 20px;
    }
    span{
      position: relative;
      right: 50%;
      transform: translate(50%,0);
    }
  }
  .center {
    width: 100%;
    height: 650px;
    overflow: auto;
    background-color: #f5f5f5;
    li {
      list-style: none;
      width: 100%;
      display: flex;
      text-align: left;
      //align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      .line {
        margin: 10px;
        justify-content: flex-start;
        .avatar{
          //display: inline-block;
          position: relative;
          top:7px;
          height: 40px;
          width: 40px;
          border-radius: 50%;
        }
        .my_avatar{
          float: right !important;
        }
        .my_content{
          display: flow-root;
          //align-self: flex-end;
          // width: 60%;
          //clip-path: polygon(0 0, 88% 0, 88% 35%, 95% 50%, 88% 65%, 88% 100%, 0 100%);
          .title{
            position: relative;
            right:10px;
            top:3px;
          }
          .content{
            position: relative;
            right:10px;
            bottom: 10px;
            text-align: left;
            background-color: rgb(149, 236, 105);
          }
          .content::before {
              position: absolute;
              top: 5px;
              right:-10px;
              content:'';
              width:0;
              height:0;
              border-left:6px solid rgb(149, 236, 105);
              border-bottom: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid transparent;
          }
          .imgcontent{
            position: relative;
            top: 5px;
            right:5px;
            
          }
          //float: right;
          position: relative;
          right:10px;
        }
        .friend_avatar{
          float:left !important;
        }
        .friend_content{
          display: flow-root;
          //align-self: flex-end;
          // width: 60%;
          .title{
            position: relative;
            left:10px;
            top:3px;
          }
          .content{
            position: relative;
            left:10px;
            bottom: 10px;
            text-align: left;
            background-color: white;
          }
          // .content{
          //   background-color: white;
          //   //clip-path: polygon(5% 0, 100% 0, 100% 100%,5% 100%, 5% 65%,0 50%,5% 35%);
          // }
          .content::before {
              position: absolute;
              top: 5px;
              left:-10px;
              content:'';
              width:0;
              height:0;
              border-right:6px solid rgb(255, 255, 255);
              border-bottom: 5px solid transparent;
              border-left: 5px solid transparent;
              border-top: 5px solid transparent;
          }
          .imgcontent{
            position: relative;
            top: 5px;
            left:5px;

          }
          //clip-path: polygon(5% 0, 100% 0, 100% 100%,5% 100%, 5% 65%,0 50%,5% 35%); 
          //float: left;
          position: relative;
          left:10px;
        }
        // .my_avatar{
        //   float: right;
        // }
        //width: 60%;
        .title {
          width: 100%;
          margin-left: auto;
          text-align: left;
          //position: absolute;
          //padding-left:5px;
          font-size: 10px;
          color: gray;
        }
        .content {
          display: inline-block;
          width:auto;
          max-width: 500px;
          // white-space: pre-line;
          position:relative;
          top:10px;
          //right: 80px;
          padding: 8px 20px;
          background-color: #fff;
          border-radius: 5px;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
      img {
        width: 80px;
        height: 80px;
        border-radius: 10%;
      }

    }
    .mySay {
      text-align: right;
      justify-content: flex-end;
      //background-color: rgb(196, 19, 19);
    }
  }
  .bottom {
    height: 50px;
    display: flex;
    .emoji-mart{
      width: 355px;
      height: 400px;
      position: absolute;
      bottom: 160px;
      right: 335px;

    }
    .uploader{
      height: 50px;
      border: 1px solid #c9c9c9;
      // .el-icon-picture{
      //   // height: 45px;
      // }
    }
    .inp {
      white-space:pre-wrap;
      vertical-align:text-top;
      overflow: scroll;
      height: 50px;
      width:80%;
      padding-left: 20px;
      border: 1px solid gainsboro;
    }
    .inp:focus {
      outline: none;
    }
    .btn {
      height: 50px;
      width: 20%;
      box-sizing: content-box;
      border: 1px solid rgb(201, 201, 201);
      background-color: rgb(201, 201, 201);
      color: rgb(0, 0, 0);
      margin: 0;
    }
  }
}
</style>
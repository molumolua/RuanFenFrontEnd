<template>
  <div class="fanorfollow_box">
    <div class="fanorfollow" v-for="author in scientists" :key="author.id">
      <div class="fanorfollow_left">
        <img class="fanorfollow_img" v-image-preview src="@/assets/img/defaultavatar.png" v-if="author.author.avatar_url == ''"/>
        <img class="fanorfollow_img" v-image-preview :src="author.author.avatar_url" v-else/>
      </div>
      <div class="fanorfollow_info">
        <div class="fanorfollow_info_top">
          <span style="color: #666; max-width: 180px; font-size: large; font-weight: 500;" @click="personal(author.author.open_alex_id)">
            {{ author.author.real_name }}
          </span>
        </div>
        <div class="fanorfollow_info_bottom">
          <span>
            WorkPlace:&nbsp;{{ author.author.institution_display_name }}
          </span>
        </div>
      </div>
      <div class="fanorfollow_botton">
        <div class="hero-button mt-30">
          <button class="ht-btn ht-btm-md" @click="unfollow(author.author.open_alex_id)">Unfollow</button>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "MyFanAndFollow",
    data() {
      return {
        scientists: [],
      };
    },
    mounted() {
      getLoacl();
      this.load();
    },
    watch: {
      scientists: function(newVal,oldVal){
                for(let cnt = 0; cnt < newVal.length; cnt++) {
                  const headers = {
        'Content-Type': 'application/json',
      };
      const postData = {
        'open_alex_id': newVal[cnt].author.open_alex_id,
      };
      axios.post('http://121.36.19.201/api/get_author_avatar/', postData, { headers }).then((response) => {
        console.log(response.data);
        console.log(this.scientists[cnt].avatar_url)
        this.scientists[cnt].author.avatar_url = response.data.url
      }).catch((error) => {
        console.log(error);
        this.scientists[cnt].author.avatar_url = "111"
      })
                }
      }
    },
    methods: {
      personal(id){
        useSCIid().value=id
        setLocal()
        this.$router.push("/scientist")
      },
      load() {
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + useToken().value
      };
      axios.get('http://121.36.19.201/api/get_follow/', { headers }).then((response) => {
        console.log(response.data);
        this.scientists = response.data
      }).catch((error) => {
        console.log(error);
      })
      },
      unfollow(idd) {
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + useToken().value
      };
      const postData = {
        'author_id': idd,
      };
      data = axios.post('http://121.36.19.201/api/revoke_follow/', postData, { headers }).then((response) => {
        console.log(response.data)
        this.load()
      }).catch((error) => {
        console.log(error);
      })
      },
    },
  };
  </script>
  
  <style>
  .fanorfollow_box :hover {
    border-width: 1px;
    border-color: deepskyblue;
  }
  .fanorfollow {
    padding: 15px 40px 15px 30px;
    height: 85px;
    display: flex;
    align-items: center;
    border: 1px solid #ebebeb;
  }
  .fanorfollow :hover {
    border-width: 1px;
    border-color: deepskyblue;
  }
  .fanorfollow_left {
    width: 60px;
    height: 60px;
  }
  .fanorfollow_img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    vertical-align: top;
  }
  .fanorfollow_info {
    display: inline-block;
    margin-left: 20px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
  }
  .fanorfollow_info_top {
    display: inline-block;
    font-size: 10;
    line-height: 14px;
    vertical-align: top;
    cursor: pointer;
  }
  .fanorfollow_info_top :hover {
    color: deepskyblue;
  }
  .fanorfollow_info_bottom {
    line-height: 20px;
    color: #999;
    margin-top: 5px;
    cursor: pointer;
  }
  .fanorfollow_info_bottom :hover {
    color: deepskyblue;
  }
  </style>
  
<template>
    <div class="fanorfollow_box">
      <div class="fanorfollow" v-for="author in scientists" :key="author.id">
        <div class="fanorfollow_left">
          <img class="fanorfollow_img" v-image-preview src="@/assets/img/defaultavatar.png" />
        </div>
        <div class="fanorfollow_info">
          <div class="fanorfollow_info_top">
            <span
              style="color: #666; max-width: 180px; font-size: large; font-weight: 500;"
              @click="personal(author.id)"
              >{{ author.author.real_name }}</span
            >
          </div>
          <div class="fanorfollow_info_bottom">
            <span>WorkPlace:&nbsp;{{ author.author.institution_display_name }}</span>
          </div>
        </div>
        <div class="fanorfollow_botton">
            <div class="hero-button mt-30">
              <button class="ht-btn ht-btm-md" @click="unfollow(author.author.open_alex_id)">Unfollow</button>
            </div>
        </div>
      </div>
      <!-- <div>
        <el-empty
          v-if="this.scientists.length == 0"
          :image-size="250"
          description="这里什么都没有哟"></el-empty>
      </div> -->
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
    methods: {
      async load() {
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + useToken().value
      };
      data = await axios.get('http://121.36.19.201/api/get_follow/', { headers }).then((response) => {
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
  
<template>
  <div id="image">
    <div style="height: 44px">
      <header>
        <div class="return" @click="goback">
          <p class="icon">
            <svg t="1578395710688" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2513" width="32" height="32">
              <path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" p-id="2514" fill="#D86666"></path>
            </svg>
          </p>
        </div>
        <div class="title">
          <p>相册</p>
        </div>
        <div class="other"></div>
      </header>
    </div>
    <div class="photo">
      <div class="box">
       <template v-for="(item,index) in urls">
          <el-image  :src="item" :key="index" :preview-src-list="urls"></el-image>
       </template>
        
        
      </div>
    </div>
  </div>
</template>

<script>
// import imgUrl from "../assets/logo.png"
// import imgUrl2 from "../assets/banner.jpg"
// import imgUrl3 from "../assets/welcome.jpg"

export default {
  data() {
    return {
      urls: []
    }
  },
  async created() {
    var res = await this.$axios('/api/getImage',{});
    if(res.data.code == "00") {
      this.urls = res.data.urls;
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
#image {
  background: rgb(91, 61, 61);
  header {
    background: #4a3434;
    display: flex;
    position: fixed;
    height: 40px;
    width: 100%;
    top: 0;
    div {
      height: 100%;
      width: 50px;
      flex: 1;
    }
    .return {
      .icon {
        transform: translateY(2px);
        width: 23px;
      }
    }
    .title p {
      text-align: center;
      color: rgba(216, 102, 102, 0.7);
      line-height: 40px;
    }
  }
  .photo {
    overflow: scroll;
    width: 100%;
    height: calc(100% - 44px);
    .box {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &::after {
            content: "";
            width: 30%
        }
        div.el-image {
            width: 30%;
            max-height: 150px;
        }
    }
  }
}
</style>
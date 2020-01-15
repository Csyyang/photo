<template>
  <div id="image">
    <div style="height: 44px">
      <mheader title="相册">
        <template v-slot:other>
          <p class="other-icon" @click="$router.push('/upload')">
            <svg t="1578554837064" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1988" width="23" height="23">
              <path d="M881 512c0-52.4 32.9-96.8 79-114.5-11-43.2-28-83.9-50.2-121.3C864.6 296.3 810 288.1 773 251c-37-37-45.2-91.7-25.1-136.8C710.4 92 669.7 75 626.5 64c-17.8 46.1-62.2 79-114.5 79-52.4 0-96.8-32.9-114.5-79-43.2 11-83.9 28-121.3 50.2 20.1 45.2 11.9 99.8-25.1 136.8-37 37-91.7 45.2-136.8 25.2C92 313.6 75 354.3 64 397.5c46.1 17.8 79 62.2 79 114.5 0 52.4-32.9 96.8-79 114.5 11 43.2 28 83.9 50.2 121.3C159.4 727.7 214 735.9 251 773c37 37 45.2 91.7 25.1 136.8C313.6 932 354.3 949 397.5 960c17.8-46.1 62.2-79 114.5-79 52.4 0 96.8 32.9 114.5 79 43.2-11 83.9-28 121.3-50.2-20.1-45.2-11.9-99.8 25.1-136.8 37-37 91.7-45.2 136.8-25.2C932 710.4 949 669.7 960 626.5c-46.1-17.7-79-62.1-79-114.5zM512 635c-67.9 0-123-55.1-123-123s55.1-123 123-123 123 55.1 123 123-55.1 123-123 123z" p-id="1989" fill="#D86666"></path>
            </svg>
          </p>
        </template>
      </mheader>
    </div>
    <div class="photo">
      <div class="box">
        <template v-for="(item,index) in urls">
          <el-image :src="item" :key="index" :preview-src-list="urls"></el-image>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import mheader from '../components/header.vue'

export default {
  data() {
    return {
      urls: []
    }
  },
  components: {
    mheader
  },
  async created() {
    var res = await this.$axios('/api/getImage', {});
    if (res.data.code == "00") {
      this.urls = res.data.urls;
    }
  }
}
</script>

<style lang="scss">
#image {
  background: rgb(91, 61, 61);
 .other-icon {
        position: absolute;
        right: 12px;
        top: 9px;
        width: 20px;
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
        width: 30%;
      }
      div.el-image {
        width: 30%;
        max-height: 150px;
      }
    }
  }
}
</style>
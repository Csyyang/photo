<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  async created() {
    //是否登录
    var res = await this.$axios("/api/isLogin", {});
      this.$store.commit("AlreadyLogin",res.data.state)
  }
}
</script>

<style>
#app,
#app > div:first-child {
  overflow: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>

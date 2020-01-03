<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app,
#app > div:first-child {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>

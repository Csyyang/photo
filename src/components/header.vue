<template>
  <header id="header-com">
    <div class="return" @click="goback">
      <p class="icon">
        <svg t="1578395710688" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2513" width="32" height="32">
          <path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" p-id="2514" fill="#D86666"></path>
        </svg>
      </p>
    </div>
    <div class="title">
      <p>{{ title }}</p>
    </div>
    <div class="other">
      <slot name="other"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="scss">
#header-com {
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
  .other {
    position: relative;
    box-sizing: border-box;
  }
}
</style>
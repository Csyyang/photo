<template>
  <div id="index">
    <header>
      <nav>
        <div class="logo">
          <router-link to="/">羊羊</router-link>
        </div>
        <ul>
          <li>
            <router-link :class="{ line: checked == 0 }" @click.native="checked = 0" to="/">首页</router-link>
          </li>
          <li>
            <router-link :class="{ line: checked == 1 }" @click.native="checked = 1" to="/">博文</router-link>
          </li>
          <li>
            <a :class="{ line: checked == 2 }" @click="login">{{ AlreadyLogin }}</a>
          </li>
          <li @click="showSidebar = !showSidebar">
            <svg t="1578016042541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5379" data-spm-anchor-id="a313x.7781069.0.i3" width="200" height="200">
              <path d="M256 734.101333v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666zM256 493.184v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666zM256 252.245333v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666z" p-id="5380" fill="#ffffff"></path>
            </svg>
          </li>
        </ul>
      </nav>
      <div class="banner">
        <div class="content">
          <h1>羊羊羊的博客</h1>
          <div class="text">欢迎来到羊羊的博客鸭，随意点击need鼠标</div>
          <button class="know-me" @click="test">了解我</button>
          <div class="more">更多</div>
          <p class="move">
            <svg t="1578032503701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1627" id="mx_n_1578032503703" data-spm-anchor-id="a313x.7781069.0.i6" width="32" height="32">
              <path d="M957.463608 326.608639 541.393447 753.98224l0 0-29.720905 30.527271-29.718859-30.527271 0 0L65.883523 326.608639l29.718859-30.525224 416.07016 427.370531 416.07016-427.370531L957.463608 326.608639z" p-id="1628" fill="#ffffff" data-spm-anchor-id="a313x.7781069.0.i7" class=""></path>
            </svg>
          </p>
        </div>
      </div>
    </header>
    <div class="substance">
      <section class="green-sction">
        <div>
          <h2>啦啦啦</h2>
          <div class="hr"></div>
          <div class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati.</div>
        </div>
        <ul class="tilt-icon">
          <li>
            <svg t="1578035382027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8992" width="32" height="32">
              <path d="M214.768142 157.677876H394.19469v119.617699h-179.426548zM693.238938 157.677876h179.426549v119.617699h-179.426549zM693.238938 308.106195v268.233628c0 83.369912-67.058407 150.428319-150.428319 150.428319-83.369912 0-150.428319-67.058407-150.428318-150.428319V308.106195H212.955752v270.046017c0 181.238938 146.80354 329.854867 329.854867 329.854868 181.238938 0 329.854867-146.80354 329.854868-329.854868V308.106195h-179.426549z" fill="#ffffff" p-id="8993"></path>
            </svg>
          </li>
          <li>
            <svg t="1578035330418" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6893" width="32" height="32">
              <path d="M943.97794 95.09868h-49.616703v-14.723655C894.361237 36.153634 858.358873 0 814.339177 0h-1.15974c-44.019697 0-80.02206 36.153634-80.022061 80.375025v14.774079H290.741777v-14.774079C290.741777 36.153634 254.739413 0 210.77014 0h-1.260587c-43.969273 0-79.971637 36.153634-79.971637 80.375025v14.774079h-49.515856A80.375025 80.375025 0 0 0 0 175.423281v768.201694c0 44.221391 36.002364 80.375025 80.02206 80.375025h864.006303c44.019697 0 80.02206-36.153634 80.02206-80.375025V175.423281a80.526295 80.526295 0 0 0-80.072483-80.324601z m-178.801655-14.723655c0-26.573173 21.480402-48.204845 48.003152-48.204846h1.15974c26.472326 0 48.003151 21.631672 48.003151 48.204846v142.950561a48.154422 48.154422 0 0 1-48.003151 48.204845h-1.15974a48.103998 48.103998 0 0 1-48.003152-48.204845V80.375025z m-603.61946 0c0-26.573173 21.480402-48.204845 48.003151-48.204846h1.210164c26.421903 0 48.003151 21.631672 48.003151 48.204846v142.950561a48.204845 48.204845 0 0 1-48.003151 48.204845h-1.260587a48.103998 48.103998 0 0 1-48.003152-48.204845l0.050424-142.950561z m782.421115 879.33504H80.02206a16.286784 16.286784 0 0 1-15.984242-16.08509V378.831593h895.974788v564.793382a16.38763 16.38763 0 0 1-16.034666 16.08509z" p-id="6894" fill="#ffffff"></path>
              <path d="M182.785109 493.847548h147.639945v72.660232H182.785109V493.847548zM440.549931 493.847548h146.429781v72.660232H440.549931V493.847548zM697.104589 493.847548h144.110302v72.660232h-144.110302V493.847548zM182.785109 641.487493h147.639945v71.450069H182.785109v-71.450069zM440.549931 641.487493h146.429781v71.450069H440.549931v-71.450069zM697.104589 641.487493h144.110302v71.450069h-144.110302v-71.450069zM182.785109 785.54737h147.639945v74.979713H182.785109v-74.979713zM440.549931 785.54737h146.429781v74.979713H440.549931v-74.979713zM697.104589 785.54737h144.110302v74.979713h-144.110302v-74.979713z" p-id="6895" fill="#ffffff"></path>
            </svg>
          </li>
          <li>
            <svg t="1578035355048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8023" width="32" height="32">
              <path d="M899.634 747.532v-515.102c0-19.217-14.352-34.908-32.11-34.908h-714.574c-17.758 0-32.11 15.569-32.11 34.908v515.102h-105.331v42.57c0 19.217 14.352 34.908 32.11 34.908h928.764c17.758 0 32.11-15.569 32.11-34.908v-42.57h-108.859zM551.043 762.371h-78.086c-4.379 0-7.906-5.108-7.906-11.312 0-6.325 3.527-11.433 7.906-11.433h78.086c4.379 0 7.906 5.108 7.906 11.433 0 6.203-3.527 11.312-7.906 11.312zM833.589 705.205h-646.705v-435.799h646.705v435.799z" p-id="8024" fill="#ffffff"></path>
            </svg>
          </li>
        </ul>
      </section>
    </div>
    <div class="mask" v-show="showSidebar" @click="showSidebar = false"></div>
    <transition name="silebar">
      <div class="sidebar" v-show="showSidebar">
        <ul>
          <li @click="goImage">相册</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: 0,
      showSidebar: false,
      state: "未登录"
    }
  },
  computed: {
    AlreadyLogin() {
      return this.$store.state.AlreadyLogin?"已登录":"未登录";
    }
  },
  methods: {
    login() {
      this.checked = 2;
      if(this.AlreadyLogin == "未登录") {
        this.$router.push('/login');
      }
    },
    goImage() {
      this.$router.push('./image');
    },
    async test() {
      var res = await this.$axios("/api/test", {
        res: "csc"
      });
      window.console.log(res);
    }
  }
}
</script>

<style lang="scss">
body:before {
  content: "";
  background: url("../assets/banner.jpg");
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
#index {
  header {
    background-color: rgba(0, 0, 0, 0.2);
    nav {
      display: flex;
      justify-content: space-between;
      .logo {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
        padding-left: 30px;
        a {
          line-height: 50px;
          color: #fff;
        }
      }
      ul {
        width: 50%;
        display: flex;
        justify-content: space-between;
        a {
          color: #fff;
          display: inline-block;
          line-height: 50px;
        }
        .line {
          border-bottom: 1px solid #fff;
        }
        svg {
          transform: translateY(3px);
          width: 25px;
          height: 45px;
        }
      }
    }
    .banner {
      height: 500px;
      padding-top: 100px;
      box-sizing: border-box;
      .content {
        text-align: center;
        margin: 0 auto;
        max-width: 300px;
        h1 {
          text-align: center;
          font-size: 30px;
          color: #fff;
          border-top: 2px solid #fff;
          border-bottom: 2px solid #fff;
          padding: 10px 0;
        }
        .text {
          text-align: center;
          color: #fff;
          font-size: 18px;
          margin: 10px 0;
        }
        .know-me {
          margin-top: 20px;
          background-color: rgba(8, 157, 157, 0.54);
          border-width: initial;
          border-style: none;
          border-color: initial;
          border-image: initial;
          padding: 5px 5px;
          color: #fff;
          font-size: 14px;
        }
        .know-me :focus {
          outline: 0;
        }
        .more {
          margin-top: 100px;
          color: #fff;
        }
        .move {
          animation: moveto 0.5s infinite;
          animation-direction: alternate;
          svg {
            width: 20px;
          }
        }
      }
    }
  }
  .substance {
    .green-sction {
      padding: 50px 0;
      background-color: #089d9d;
      color: #fff;
      text-align: center;
      .hr {
        background-color: #069494;
        width: 60%;
        margin: 20px auto;
        height: 2px;
      }
      .tilt-icon {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        li {
          box-sizing: border-box;
          padding-top: 20px;
          margin: 15px;
          width: 70px;
          height: 70px;
          border: 1px solid #028e8e;
          transform: rotate(45deg);
          svg {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .sidebar {
    box-sizing: border-box;
    width: 120px;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    right: 0;
  }
  .silebar-enter-active,
  .silebar-leave-active {
    transition: all 0.5s;
  }

  .silebar-enter,
  .silebar-leave-to {
    right: -120px;
  }
  ul {
    margin-left: 5px;
    li {
      margin-left: 2px;
    }
  }
}

@keyframes moveto {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
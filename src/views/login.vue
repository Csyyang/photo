<template>
  <div id="login">
    <div class="box">
      <h1>欢迎登录</h1>
      <div class="login-input">
        <div class="bkground">
          <input type="text" placeholder="请输入账号" v-model="user">
          <div class="icon">
            <svg t="1578295705731" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2264" width="16" height="16">
              <path d="M511.585326 529.405027c-18.691027 0-36.840418-3.687011-53.94135-10.926905-16.475339-6.934775-31.293007-16.914586-44.029117-29.634313-12.719727-12.719727-22.699538-27.537396-29.685507-44.046522-7.459005-17.625162 0.778153-37.955429 18.403315-45.399076 17.574992-7.442622 37.956453 0.810917 45.399075 18.403315 3.484282 8.255587 8.491081 15.663398 14.867839 22.056538 6.376758 6.360376 13.785592 11.368199 22.006367 14.817668 17.118339 7.239893 36.874206 7.239893 53.957733 0 8.238181-3.44947 15.612203-8.457293 22.006367-14.817668 6.360376-6.39314 11.367175-13.80095 14.817669-22.02275 7.442622-17.626186 27.807702-25.878702 45.400099-18.437103 17.624138 7.443646 25.878702 27.740125 18.469867 45.365287-6.968564 16.509127-16.982162 31.326795-29.701889 44.080311-12.720751 12.720751-27.53842 22.699538-44.046523 29.669126-17.083527 7.205081-35.250324 10.892092-53.923945 10.892092z" fill="#ffffff" p-id="2265"></path>
              <path d="M891.050538 882.822596c-40.019582-127.80751-128.382933-225.575248-237.076551-271.853841 80.615611-48.443086 134.743309-136.537156 134.743309-237.416481 0-153.045259-124.121522-277.130945-277.13197-277.130945-153.095429 0-277.131969 124.085686-277.131969 277.130945 0 100.879326 54.110292 188.972371 134.743309 237.416481-108.694642 46.277569-197.05697 144.112883-237.077575 271.853841-5.716352 18.268162 4.4324 37.687171 22.699537 43.368711 18.284544 5.751164 37.686147-4.397587 43.403523-22.664726 47.395652-151.217624 173.325356-252.842338 313.363175-252.842338 140.054202 0 266.002336 101.624714 313.3642 252.842338 4.633081 14.816645 18.300926 24.289632 33.051018 24.289632 3.415681 0 6.899963-0.540611 10.351481-1.624906 18.268162-5.682564 28.416913-25.100549 22.698513-43.368711z m-587.313932-509.270322c0-114.613723 93.234998-207.848721 207.84872-207.848721s207.848721 93.234998 207.848721 207.848721-93.234998 207.848721-207.848721 207.848721-207.848721-93.233974-207.84872-207.848721z" fill="#ffffff" p-id="2266"></path>
            </svg>
          </div>
        </div>
        <div class="bkground">
          <input type="password" placeholder="请输入密码" v-model="password">
          <div class="icon">
            <svg t="1578296148902" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3205" width="16" height="16">
              <path d="M512.005714 0C354.176283 0 226.219137 127.991429 226.219137 285.786577v112.198201a40.831551 40.831551 0 0 0 75.732072 21.187152V277.181439c0-112.186773 91.788139-203.974912 203.974912-203.974913h11.164967c112.186773 0 203.974912 91.788139 203.974912 203.974913v140.17347a40.831551 40.831551 0 0 0 76.772002-19.42727v-112.141062C797.780863 127.957146 669.835145 0 512.005714 0z" p-id="3206" fill="#ffffff"></path>
              <path d="M831.024351 370.786599H192.975649A122.483227 122.483227 0 0 0 70.492422 493.258398v408.269803a122.483227 122.483227 0 0 0 122.483227 122.471799h638.048702a122.483227 122.483227 0 0 0 122.483227-122.471799V493.258398a122.483227 122.483227 0 0 0-122.483227-122.471799zM886.529206 907.36781a48.13392 48.13392 0 0 1-47.996786 47.996786H185.46758a48.13392 48.13392 0 0 1-47.996786-47.996786V487.418789a48.13392 48.13392 0 0 1 47.996786-47.996786h653.06484a48.13392 48.13392 0 0 1 47.996786 47.996786z" p-id="3207" fill="#ffffff"></path>
              <path d="M475.425306 605.97085l73.13796 0 0 182.844899-73.13796 0 0-182.844899Z" p-id="3208" fill="#ffffff"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="buttom" @click="submit">
        <div>登录</div>
      </div>
    </div>
    <div class="other">
      <div class="hr-left"></div>
      <p>其他登录方式</p>
      <div class="hr-rigth"></div>
    </div>
    <div class="return" @click="other">
      <svg t="1578298620663" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4871" width="48" height="48">
        <path d="M512 64C265 64 64 265 64 512s201 448 448 448 448-201 448-448S759 64 512 64z m0 862.8C283.3 926.8 97.2 740.7 97.2 512S283.3 97.2 512 97.2 926.8 283.3 926.8 512 740.7 926.8 512 926.8z" fill="#ffffff" p-id="4872"></path>
        <path d="M635.8 436.4c-90.5 0-161.9 61.5-161.9 136.9 0 75.6 71.3 136.9 161.9 136.9 18.9 0 38-4.7 57-9.4l52.2 28.4-14.3-47.2c38.2-28.4 66.6-66.1 66.6-108.6 0-75.5-76-137-161.5-137z m-52.5 113.3c-9.5 0-19-9.3-19-18.8 0-9.4 9.6-18.9 19-18.9 14.4 0 23.8 9.4 23.8 18.9 0 9.4-9.4 18.8-23.8 18.8z m104.6 0c-9.4 0-18.9-9.3-18.9-18.8 0-9.4 9.5-18.9 18.9-18.9 14.3 0 23.8 9.4 23.8 18.9 0.1 9.4-9.5 18.8-23.8 18.8z" fill="#ffffff" p-id="4873"></path>
        <path d="M623.7 426.2c6.2 0 12.3 0.5 18.3 1.1-16.5-76-98.5-132.4-191.9-132.4-104.6 0-190.2 70.7-190.2 160.4 0 51.8 28.5 94.3 76.1 127.3l-19 56.7 66.5-33.1c23.8 4.7 42.8 9.5 66.6 9.5 5.9 0 11.9-0.3 17.7-0.8-3.7-12.6-5.8-25.8-5.8-39.5 0-82.3 71.3-149.2 161.7-149.2z m-102.2-51.1c14.3 0 23.8 9.3 23.8 23.5s-9.5 23.6-23.8 23.6-28.6-9.5-28.6-23.6c0-14.2 14.3-23.5 28.6-23.5z m-133.2 47.2c-14.3 0-28.7-9.5-28.7-23.6 0-14.2 14.4-23.5 28.7-23.5 14.2 0 23.7 9.3 23.7 23.5 0 14.1-9.5 23.6-23.7 23.6z" fill="#ffffff" p-id="4874"></path>
      </svg>
    </div>
    <div class="alert" v-show="showTip">
      <div class="alert-content">
        <p class="header">温馨提示哟</p>
        <p class="alert-text">{{ tipText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: false,
      tipText: "醒醒吧，其他登录不可能的！！",
      user: "",
      password: ""
    }
  },
  methods: {
    other() {
      this.showTip = true;
      setTimeout(() => {
        this.$router.push('/')
      }, 2000)
    },
    async submit() {
      var res = await this.$axios("/api/login", {
        user: this.user,
        password: this.password
      })
      res = res.data;
      if (res.code == "00") {
        this.tipText = "登录成功";
        this.showTip = true;
        this.$store.commit("AlreadyLogin",true);
        setTimeout(() => {
          this.$router.push('/');
        }, 1000)
      } else {
        this.tipText = res.text;
        this.showTip = true;
        setTimeout(() => {
          this.showTip = false;
        }, 1000)
      }
    }
  }
}
</script>
<style lang="scss">
#login {
  background: rgb(105, 186, 197);
  .box {
    h1 {
      font-weight: 400;
      color: rgb(201, 255, 255);
    }
    box-sizing: border-box;
    padding-top: 9rem;
    text-align: center;
    margin: 0 auto;
    h1 {
      color: #fff;
      margin-bottom: 40px;
    }
    .login-input {
      height: 95px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .bkground {
        position: relative;
        padding: 0 30px;
        border-radius: 17px;
        height: 40px;
        background: rgb(171, 216, 221);
        input::-webkit-input-placeholder {
          /* WebKit, Blink, Edge */
          color: rgba(236, 255, 255, 0.7);
        }
        input {
          width: 100%;
          background: rgb(171, 216, 221);
          height: 40px;
          font-size: 18px;
          color: rgb(236, 255, 255);
        }
        .icon {
          width: 20px;
          height: 20px;
          position: absolute;
          left: 3px;
          top: 5px;
        }
      }
    }
    .buttom {
      padding: 0 40px;
      margin-top: 40px;
      div {
        width: 100%;
        border-radius: 17px;
        height: 35px;
        background: #fff;
        line-height: 35px;
        color: rgb(174, 200, 205);
      }
    }
  }
  .other {
    margin: 40px auto;
    width: 20rem;
    display: flex;
    div {
      transform: translateY(10px);
      width: 10rem;
      height: 1px;
      background: rgb(201, 255, 255);
    }
    p {
      margin: 0 12px;
      flex-shrink: 0;
      color: rgb(201, 255, 255);
    }
  }
  .return {
    width: 48px;
    margin: 0 auto;
  }
  .alert {
    position: absolute;
    top: 12rem;
    left: 30%;
    .alert-content {
      width: 10rem;
      height: 8rem;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 17px;
      p.header {
        text-align: center;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 17px 17px 0 0;
      }
      .alert-text {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
}
</style>
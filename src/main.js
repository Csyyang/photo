import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import './assets/css/chushi.css'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = "devtools";
Vue.config.productionTip = false

Vue.prototype.$axios2 = axios;
Vue.prototype.$axios = async function (url, parms, header) {
  if (process.env.NODE_ENV != 'development') {
    url ='/photo' +  url.slice(4);
  }
  // parms = qs.stringify(parms);
  if(header) {
    var res = await axios.post(url, parms, header);

  } else {
    var res = await axios.post(url, parms);
  }
  return res;
}

// http response 响应拦截器
axios.interceptors.response.use(response => {

  var first = app.$store.state.first;
  if (response.data.code == "03") {
    if (!first) {//是否为第一次登录主页
      app.$router.push('/login');
    }
    app.$store.commit("first", false);
    app.$store.commit("AlreadyLogin", false);
  }
  return response;
}, error => {
  if (error.response) {

    // 返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
});



var app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AlreadyLogin: false,
    first: true
  },
  mutations: {
    AlreadyLogin (state,payload) {
      state.AlreadyLogin = payload;
    },
    first (state,payload) {
      state.first = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})

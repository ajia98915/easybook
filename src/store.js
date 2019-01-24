import Vue from 'vue'
import Vuex from 'vuex'
import category from './stores/hand'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Hand
  }
})

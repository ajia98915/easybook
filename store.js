import Vue from 'vue'
import Vuex from 'vuex'
import category from './stores/category'
import topn from './stores/topn'
import member from './stores/member'
import ti from './stores/ti'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    topn,
    member,
    ti
  }
})

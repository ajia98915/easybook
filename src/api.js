/*
所有调用接口的代码都写到这里 
*/
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// 设置接口的基地址
Vue.axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b4dbf917e597b7eabfb579d/example'


// 导航栏
function getHand() {
    return Vue.axios.get('/hand')
}

// 导出
export default {
    getHand
   
}


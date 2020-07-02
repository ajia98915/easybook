/*
所有调用接口的代码都写到这里 
*/
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// 设置接口的基地址
Vue.axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c35ef5017c96e7d2a33f8be/ti'


// 获取所有的分类
function getCategories() {
    return Vue.axios.get('/categories')
}

// 获取排行榜
function getTopn(category_id='', top=50) {
    return Vue.axios.get('/top10s', {
        category_id,
        top
    })
}

// 登录的函数
function login(username, password) {
    return Vue.axios.post('/authorizations', {
        username,
        password
    })
}

// 获取某一个分类下的题
function getTiByCatId(catId, page=1, per_page=50) {
    return Vue.axios.get('/categories/'+catId+'/questions', {
        page,
        per_page
    })
}

// 将来这里还会调用其它接口

// 导出
export default {
    getCategories,
    getTopn,
    login,
    getTiByCatId
}
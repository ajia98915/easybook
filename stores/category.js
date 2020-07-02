import api from "../api";

/* 所有分类相关的数据都在这里 */

// 数据
const state = {
    categories: []    // 所有的分类
}

// 计算属性

// mutitions（修改数据）
const mutations = {
    // 设置分类数据
    setCategory(state, data) {
        state.categories = data
    }
}

// actions（异步操作）
const actions = {
    getCategories(context) {
        api.getCategories().then(res=>{
            context.commit('setCategory', res.data.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
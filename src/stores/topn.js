import api from "../api";

/* 所有分类相关的数据都在这里 */

// 数据
const state = {
    topn: []    // 所有的分类
}

// 计算属性

// mutitions（修改数据）
const mutations = {
    // 设置分类数据
    setTopn(state, data) {
        state.topn = data
    }
}

// actions（异步操作）
const actions = {
    getTopn(context,cid='',top=50) {
        api.getTopn(cid,top).then(res=>{
            context.commit('setTopn', res.data.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
import api from "../api";

/* 所有题相关的数据都在这里 */

/*
答题的流程：
1. 一次取出50道题
2. 每次显示一道
3. 50道答完之后再取50道
...
*/

// 数据
const state = {
    per_page: 50,  // 每页条数
    page: 1,      // 当前取题的页数
    allTi: [],    // 保存当前页的所有的题
    index: 0      // 当前答到第几道题的下标
}

// 计算属性
const getters = {
    
}

// mutitions（修改数据）
const mutations = {
    // 数据初始化
    initData(state) {
        state.page = 1
        state.index = 0
    },
    // 设置数据
    setAllTi(state, data) {
        state.allTi = data
    },
    setPage(state, data) {
        state.page = data
    },
    getNext(state) {
        if(state.index++ >= state.per_page) {
            state.index = 0
        }
    }
}

// actions（异步操作）
const actions = {
    // 取出当前页所有的题
    getTi(context, catId) {
        // 数据初始化
        context.commit('initData')
        // 获取某一个分类下，某一页的题
        api.getTiByCatId(catId, context.state.page, context.state.per_page).then(res=>{
            context.commit('setAllTi', res.data.data)
        })
    },
    // 答题一道题(answer参数：回答的答案（0,1,2,3)
    // 每回答一道题就把下标+1
    answer(context, answer) {
        context.commit('getNext')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
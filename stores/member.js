import api from "../api";

/* 所有用户相关的数据都在这里 */

// 数据
const state = {
    username: ''    // 当前登录用户名
}

// 计算属性
const getters = {
    // 是否登录的状态 
    logined(state) {
        return state.username != ''
    }
}

// mutitions（修改数据）
const mutations = {
    // 设置数据
    setUserName(state, data) {
        state.username = data
    }
}

// actions（异步操作）
const actions = {
    // 初始用户状态
    initUsername(context) {
        let username = sessionStorage.getItem('username')
        if(username) {
            context.commit('setUserName', username)
        }
    },
    login(context, username, password) {
        api.login(username, password).then(res=>{

            if(res.data.status_code == 200) {
                // 调用 setUserName 
                context.commit('setUserName', username)
                // 把令牌保存到本地（现在我希望用户关闭浏览器之后，就代表退出，下次再使用时需要重新登录）
                sessionStorage.setItem('token', res.data.data.token)                
                sessionStorage.setItem('username', username)                
                // 扩展：localStorage 永久登录，下次打开浏览器不需要重新 登录
            }

        })
    },
    logout(context) {
        // 清空 session
        sessionStorage.clear()
        // 设置状态为空（然后页面自动更新）
        context.commit('setUserName', '')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
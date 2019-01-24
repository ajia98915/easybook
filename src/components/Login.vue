<template>
    <div class="login beautybox">
         <div v-if="logined">
             欢迎您，{{username}}
             <a @click.prevent="logout" >退出</a>
         </div>
         <div class="nologin" v-else>
             <div class="form">
             <h1>登录</h1>
             <form  action="">
                <div>
                    用户名：<input v-model="loginForm.username" type="text">
                </div>
                <div>
                    密码：<input v-model="loginForm.password" type="password">
                </div>
                <input @click="login(112,123)" type="button" value="登录">
             </form>
            </div>
         </div>
            
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    data() {
      return {
         loginForm: {
                username: '',
                password: ''
            }
      }
    },
    created() {
        this.initUsername()
    },

    computed: {
        ...mapState({
            username: state => state.member.username
        }),
        ...mapGetters({
            logined: 'member/logined'
        })
    },
    methods: {
       login() {
            // 判断用户名密码是否为空
            if(this.loginForm.username == '' || this.loginForm.password == '') {
                alert('用户名密码不能为空！')
            } else {
                // 调用 dologin 开始登录
                this.dologin(this.loginForm.username, this.loginForm.password)
            }
        },

        ...mapActions({
              dologin: 'member/login',
            logout: 'member/logout',
            initUsername: 'member/initUsername'
        })
    }
}
</script>

<style>
   .nologin {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
.nologin .form {
    position: relative;
    top: 100px;
    left: 300px;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 400px;
}
</style>


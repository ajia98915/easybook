<template>
  <div class="app">

    <!-- 登录 -->
    <login/>

    <hr>

    <!-- 显示所有的分类 -->
    <category/>

    <!-- 显示排行榜 -->
    <topn/>

    <!-- 答题 -->
    <ti/>
    
  </div>
</template>

<script>
import Category from './components/Category.vue'
import Topn from './components/Topn.vue'
import Login from './components/Login.vue'
import Ti from './components/Ti.vue'

export default {
  components: {
    Category,
    Topn,
    Login,
    Ti
  }
}
</script>

<style>
.beautybox {
  width: 400px;
  padding: 20px;
  box-shadow: 10px 10px 5px #888888;
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}
</style>



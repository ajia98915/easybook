<template>
    <div class="ti beautybox">
        <h1>答题</h1>
        <div v-if="allTi.length > 0">
            <h3>题目：{{allTi[index].title}}</h3>
            <ul>
                <li :key="k" v-for="(i,k) in allTi[index].options">
                    <input type="radio" name="options" :value="k">
                    {{i}}
                </li>
            </ul>
            <input type="button" @click="answer" value="答题">
        </div>
        <div v-else>
            要答题，请先选择一个分类
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
            allTi: state => state.ti.allTi,
            index: state => state.ti.index,
        })
    },
    methods: {
        ...mapActions({
            answer: 'ti/answer'
        })
    }
}
</script>

<template>
    <div class="topn beautybox">

        <h1>排行榜</h1>
        <ul>
            <li :key="k" v-for="(i,k) in topn">
                排名：{{k+1}}
                姓名：{{i.username}}
                积分：{{i.jifen}}
            </li>
        </ul>

    </div>
</template>


<style>

</style>


<script>
import {mapState, mapActions} from 'vuex'

export default {
    created() {
        this.getTopn()
    },
    computed: {
        ...mapState({
            topn: state => state.topn.topn
        })
    },
    methods: {
        ...mapActions({
            getTopn: 'topn/getTopn'

        })
    }
}
</script>

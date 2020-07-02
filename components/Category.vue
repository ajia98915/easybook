<template>
    <div class="category beautybox">

        <h1>分类列表</h1>
        <ul>
            <li :key="i.id" v-for="i in categories">
                {{i.cat_name}}
                <a @click.prevent="getTi(i.id)" href="">开始答题</a>
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
        this.getCategories()
    },
    computed: {
        ...mapState({
            categories: state => state.category.categories
        })
    },
    methods: {
        ...mapActions({
            getCategories: 'category/getCategories',
            getTi: 'ti/getTi'
        })
    }
}
</script>

<template>
    <div>
        这是子组件:{{ count }}
        <button @click="btn">按钮+1</button>
        <button @click="btn2">异步按钮</button>
    </div>
</template>

<script>
// 按需引入vuex的mapState
import { computed } from 'vue';
import { mapState, mapMutations } from 'vuex';
import { useStore } from 'vuex';
// 使用计算属性，获取vuex中mapState的数据
export default {
    setup() {
        const store = useStore()
        function btn() {
            // commit提交mutationff
            store.commit('increment', 10)
        }
        function btn2() {
            // dispatch提交action方法
            store.dispatch('sub')
        }
        return {btn,btn2}
    },
    computed: {
        ...mapState(['count'])
    }
}
</script>
<style></style>
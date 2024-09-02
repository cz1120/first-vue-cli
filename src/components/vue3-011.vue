<template>
    <div>
        这是子组件:{{ count }}
        <button @click="btn">按钮+1</button>
    </div>
</template>

<script>
// 按需引入vuex的mapState
import { computed } from 'vue';
import { mapState } from 'vuex';
import { useStore } from 'vuex';
// 使用计算属性，获取vuex中mapState的数据
export default {
    setup() {
        const store = useStore()
        function btn() {
            store.commit('increment', 10)
        }
        return {btn}
    },
    computed: {
        ...mapState(['count'])
    }
}
</script>
<style></style>
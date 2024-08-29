<template>
    <div>
        计算属性：<br>
        number1：<input type="number" v-model="number1"> <br>
        number2:<input type="number" v-model="number2" > <br>
        sum:<input type="number" v-model="sum">
        <br>
        text01:<input type="text" v-model="str1"> <br>
        text02:<input type="text" v-model="str2" > <br>
        sum2:<input type="text" v-model="sum2">
    </div>
</template>

<script>
import { ref,computed, reactive, toRefs } from 'vue'
export default {
    setup() {
        // const number1 = ref(0)
        // const number2 = ref(0)
        // const sum = computed(() => number1.value + number2.value)
        const number1 = ''
        const number2 = ''
        const res = reactive({ number1, number2 })
        const sum = computed(() => res.number1 + res.number2)

        const str1 = ''
        const str2 = ''
        const res2 = reactive({ str1, str2 })
        const sum2 = computed(() => res2.str1 + res2.str2)
        return { ...toRefs(res),...toRefs(res2),sum,sum2 }
        
    }
}
</script>

<style lang="scss" scoped>


</style>
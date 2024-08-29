<template>
    <div>
        <h1>姓名：{{ obj.name }}</h1>
        <h1>年龄：{{ obj.age }}</h1>
        <h2>ref数据：{{ ref_in }}</h2>
        <br>
        <button @click="btn">点我改变姓名</button>
    </div>
</template>

<script>
import { ref,toRef } from 'vue'
export default {
    setup() {
        const obj = {
            name: '张三',
            age: 18,
        }
        const res = toRef(obj, 'name')
        const ref_in = ref(0)
        function btn(){
            console.log('执行btn函数,改变name的值...')
            res.name = '李四'
            console.log(obj)
            console.log(res)
            ref_in.value++
            console.log(ref_in)
        }
        return {obj,btn,ref_in}
    }
}
</script>

<style lang="scss" scoped>


</style>
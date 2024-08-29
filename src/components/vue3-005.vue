<template>
    <div>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h1>a:{{ a }}</h1>
        <h1>b:{{ b }}</h1>
        <h1>c:{{ c }}</h1>
        <h1>d:{{ d.e }}</h1>
        <br>
        <button @click="btn">点我改变姓名</button>
    </div>
</template>

<script>
import { toRefs,reactive } from 'vue'
export default {
    setup() {
        const obj = {
            name: '张三',
            age: 18,
            a:1,
            b:2,
            c:3,
            d:{
                e:4
            }
        }
        const newobj = reactive(obj)
        // const res = toRefs(newobj)
        function btn(){
            console.log('执行btn函数,改变name的值...')
            // res.name = '李四'
            console.log(res)
            newobj.name = '王五'
            console.log(newobj)
        } 
        // ...语法糖 扩展运算符  解构对象数据（响应式）
        return {obj,btn,...toRefs(newobj)}
    }
}
</script>

<style lang="scss" scoped>


</style>
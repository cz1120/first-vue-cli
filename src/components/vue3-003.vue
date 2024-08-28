<template>
    <div>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h1>对象：{{ obj.name }} - {{ obj.age }}</h1>
        <h1>深层次数据：{{ obj.pro.a.b[0] }}</h1>
        <br>
        <button @click="btn">点我改变姓名</button>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const name = '张三'
        const age = 18
        const obj = reactive({
            name:'小A',
            age:20,
            pro:{
                a:{
                    b:['我是深层次数据']
                }
            }
        })
        
        function btn(){
            console.log('执行btn函数,改变name的值...',name)
            obj.name = '小B'
            console.log(obj)
            obj.pro.a.b[0] = '我是深层次数据2'
        }
        return {name,age,obj,btn}
    }
}
</script>

<style lang="scss" scoped>


</style>
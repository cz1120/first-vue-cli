<template>
    <div>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h1>性别：{{ sex }}</h1>
        <h1>职业：{{ job }}</h1>
        <h1>对象：{{ obj.name }} - {{ obj.age }}</h1>
        数组：
        <h2 v-for="item in arr" :key="item" >
            {{ item }}
        </h2>
        <h2 v-for="item in arr2" :key="item" >
            {{ item.name }} - {{ item.age }}
        </h2>
        <br>
        <button @click="btn">点我改变姓名</button>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    setup() {
        const name = ref('张三')
        const age = 18
        const sex = '男'
        const job = '程序员'
        const obj = ref({
            name: '小A',
            age: 20
        })
        const arr = ref([1, 2, 3])
        const arr2 = ref([{name: '小黑', age: 20}, {name: '小白', age: 30}])
        function btn(){
            console.log('执行btn函数,改变name的值...',name)
            name.value = '李四'
            console.log(obj)
            obj.value.name = '小B'
            console.log('改变数组数据...')
            arr.value[0] = 4
            console.log('改变对象数组数据...')
            arr2.value[0].name = '小红'
        }
        return {name,age,sex,job,obj,arr,arr2,btn}
    }
}
</script>

<style lang="scss" scoped>


</style>
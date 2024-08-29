<template>
    <div>
        
    </div>
</template>

<script>
import { toRefs,reactive } from 'vue'
export default {
    setup() {
        const user = reactive({
            name: '张三',
            age: 18
        })
        const userRefs = toRefs(user)
        console.log(userRefs.name.value)
        console.log(userRefs.age.value)
        userRefs.name.value = '李四'
        console.log(userRefs.name.value)
        console.log(user.name)
        // ...语法糖 扩展运算符  解构对象数据（响应式）
        return {userRefs}
    }
}
</script>

<style lang="scss" scoped>


</style>
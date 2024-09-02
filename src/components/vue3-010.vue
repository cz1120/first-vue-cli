<template>
    <div class="back">
        子组件：<br>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
    </div>
</template>
<script>
import { inject, ref } from 'vue';

export default {
    setup() {
        const name = ref()
        const age = ref()
        // 顶一个方法，形参用来接收父组件传过来的值
        function res(val){
            console.log('我被父组件调用的方法')
            console.log(val)
            name.value = val.name
            age.value = val.age
        }
        return { res,name,age };
    }
}
</script>

<style scoped>
.back{
    background-color: rgb(13, 11, 130);
    color: rgb(195, 233, 27);
    padding: 20px;
}
</style>
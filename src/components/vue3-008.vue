<template>
    <div>
        侦听器属性：<br>
        <h1>{{ p1 }}</h1>
        <button @click="p1++">按钮+1</button>
        <br>
        <h1>{{ p2 }}</h1>
        <button @click="p2+=2">按钮+2</button>
        <br>
        <h1>对象数据：</h1>
        <h1>{{ p3.name }}</h1>
        <h1>{{ p3.age }}</h1>
        <button @click="num++">年龄+1</button>
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';


export default {
    setup() {
        const p1 = ref(0);
        const p2 = ref(1);
        const name = ref('张三');
        const num = ref(18);
        const p3 = reactive({ name, age: num });
        // 侦听目标数据，触发回调
        watch(p1,(newVal,oldVal) => {
            console.log(newVal,oldVal);
        })
        watch(p2,(newVal,oldVal) => {
            console.log(newVal,oldVal);
        })
        // 可同时侦听多个目标数据，触发回调
        watch([p1,p2],(newVal,oldVal) => {
            console.log(newVal,oldVal);
        })
        // 侦听对象数据，触发回调  这种方式监听对象的数据，只能监听全部数据的变化（即：上一次的数据监听不到）
        // watch(p3,(newVal,oldVal) => {
        //     console.log(newVal,oldVal);
        // })
        watch(num,(newVal,oldVal) => {
            console.log(newVal,oldVal);
        },{ immediate: true })
        // 页面加载完成后，自动执行侦听
        
        return { p1,p2,p3,num };
    }
}
</script>

<style lang="scss" scoped>


</style>
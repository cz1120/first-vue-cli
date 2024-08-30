<template>
    <div>
        侦听器属性2：<br>
        <h1>{{ p1 }}</h1>
        <button @click="p1++">按钮+1</button>
        <br>
        <h1>{{ p2 }}</h1>
        <button @click="p2+=2">按钮+2</button>
        <br>
        <h1>对象数据：</h1>
        <h1>{{ p3.name }}</h1>
        <h1>{{ p3.age.num }}</h1>
        <button @click="p3.age.num++">年龄+1</button>
        <br>
        <button @click="stopwatch">停止侦听</button>
    </div>
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue';


export default {
    setup() {
        const p1 = ref(0);
        const p2 = ref(1);
        const p3 = reactive({ name: '张三', age: {num: 18} });
        
        
        // 计时器：对p1、p2、p3的age.num进行一秒增加一个的操作
        const timer = setInterval(() => {
            p1.value++;
            p2.value++;
            p3.age.num++;
        }, 1000)

        const res = watchEffect(() => {
            console.log(p1.value, p2.value, p3);
        })
        
        // wathch 与 watchEffect 比较： 
        // watchEffect不需要再一个方法中第一个参数传入要监听的具体数据，它会自动去监听所有数据的变化
        // 相当于一个生命周期
        // res(); 
        // 停止侦听的方法
        function stopwatch(){
            res() // 停止侦听
        }
        return { p1,p2,p3,stopwatch };
    }
}
</script>

<style lang="scss" scoped>


</style>
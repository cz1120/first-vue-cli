<template>
    <div>
        生命周期：{{ p1 }}
        <button @click="p1++">点击</button>
    </div>
</template>
<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onUnmounted, onUpdated, ref } from 'vue';

export default {
    // 入口函数（第一个要执行的函数）
    setup() {
        const p1 = ref(0)
        onBeforeUpdate(() => {
            console.log('我是onBeforeUpdate,更新之前被调用')
        })
        onUpdated(() => {
            console.log('我是onUpdated,更新时被调用')
        })
        onBeforeUnmount(() => {
            console.log('我是onBeforeUnmount,卸载之前被调用')
        })
        onUnmounted(() => {
            console.log('我是onUnmounted,卸载时被调用')
        })
        onErrorCaptured(() => {
            console.log('我是onErrorCaptured,捕获错误时被调用')
        })
        onMounted(() => {
            console.log('我是onMounted,挂载时被调用')
        })
        onBeforeMount(() => {
            console.log('我是onBeforeMount,挂载之前被调用')
        })
        
        console.log('我是setup')
        return{p1}
    },
    // created(){
    //     console.log('我是created')
    // },
    // mounted(){
    //     console.log('我是mounted')
    // }
}
</script>
<style>
</style>
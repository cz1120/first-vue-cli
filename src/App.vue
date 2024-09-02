<template>
  <!-- <div class="back">
    这是父组件:{{ this.$store.state.count }}
    <button @click="this.$store.commit('increment',10)">按钮</button>
  </div> -->
  <button @click="v1 = !v1">点击让子组件显示/隐藏</button>
  <HelloWorld v-if="v1"/>
</template>

<script >
import { ref } from 'vue';
import HelloWorld from './components/vue3-012.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const v1 = ref(true)
    return {v1}
  }
}
</script>

<style  >
.back{
  background-color: rgb(81, 235, 64);
  color: coral;
  padding: 20px;
}
</style>

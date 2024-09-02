<template>
  <div class="back">
    这是父组件:{{ this.$store.state.count }}
    
  </div>
  <HelloWorld/>
</template>

<script >
import HelloWorld from './components/vue3-011.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return {}
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

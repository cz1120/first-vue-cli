<template>
  <div class="hello">
    hello world !!!
    <button @click="btn">点我</button>
  </div>
</template>

<script >
export default {
  setup(props) {
    console.log('执行setup函数...')
    const res = '123'

    const btn = () => {
      console.log('执行btn函数...',res)
    }

    return {res,btn}
  }
}
</script>

<style scoped lang="scss">

</style>

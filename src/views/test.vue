<template>
  <div>
    <transition name="my">
      <h1 v-if="show">这是一个标题</h1>
    </transition>
    <button @click="show = !show">test</button>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data () {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-enter-active {
    transition: all .9s;
  }
  .my-leave-active {
    transition: all .8s;
  }
  .my-enter, .my-leave-to
  {
    transform: translateX(50px);
    opacity: 0;
  }
</style>

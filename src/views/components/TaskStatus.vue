<template>
  <div>
    <span style="color:#409EFF">进行中{{inProgress}}</span>
    <el-progress :percentage="Math.floor(inProgress/allTask*100)"></el-progress>

    <span style="color:orange">未开始{{notStarted}}</span>
    <el-progress :percentage="Math.floor(notStarted/allTask*100)" color="orange"></el-progress>

    <span style="color:grey">已挂起{{hang}}</span>
    <el-progress :percentage="Math.floor(hang/allTask*100)" color="grey"></el-progress>

    <span style="color:#00da88">已完成{{finished}}</span>
    <el-progress :percentage="Math.floor(finished/allTask*100)" color="#00da88"></el-progress>
  </div>
</template>
<script>
export default {
  name: 'TaskStatus',
  data () {
    return {
      inProgress: 10,
      notStarted: 8,
      hang: 2,
      finished: 10
    }
  },
  computed: {
    allTask: {
      get: function () {
        return (this.inProgress + this.notStarted + this.hang + this.finished)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

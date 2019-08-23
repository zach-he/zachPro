<template>
  <div class="menu-container">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo" mode="horizontal"
    @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">需求</el-menu-item>
      <el-menu-item index="3">任务</el-menu-item>
      <el-menu-item index="4">Bug</el-menu-item>
      <el-menu-item index="5"><a href="" target="_blank">xxx</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/variables.scss';
  .menu-container{
    height: 50px;
    background-color: $color-primary;
  }
  /deep/ .el-menu{
    background-color: $color-primary;
    margin: 0 50px;;
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid white;
    color:white;
    font-weight: bold;
    background-color: $color-primary;
  }
 .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
   background-color: $color-primary;
   font-weight: bold;
   color: white;
 }

.el-menu--horizontal>.el-menu-item {
    float: left;
    height: 50px;
    line-height: 50px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: white;
}
</style>

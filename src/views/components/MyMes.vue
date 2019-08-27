<template>
  <div id="mes-container">
    <el-col id="taskCol">
      <el-col>
        <b>欢迎你，{{username}}</b><br>
        {{currentTime}}
        <hr>
      </el-col>
      <el-col>
        待办任务
        <el-row class="taskNum">{{taskNum}}</el-row>
      </el-col>
      <el-col>
        高优先级任务
        <el-row class="highTask">{{highTask}}</el-row>
      </el-col>
      <el-col>
        中优先级任务
        <el-row class="midTask">{{midTask}}</el-row>
      </el-col>
      <el-col>
        低优先级任务
        <el-row class="lowTask">{{lowTask}}</el-row>
        <hr>
      </el-col>

      <el-col>
        任务状态总览
        <el-row class="taskStatus">
          <task-status/>
        </el-row>
        <hr>
      </el-col>

      <el-col>
        已完成任务
        <el-row class="finishTask">{{finishTask}}</el-row>
        <hr>
      </el-col>
    </el-col>

  </div>
</template>
<script>
import TaskStatus from './TaskStatus'
export default {
  name: 'MyMes',
  data () {
    return {
      username: 'zach',
      taskNum: 122,
      highTask: 22,
      midTask: 51,
      lowTask: 49,
      finishTask: 105
    }
  },
  components: {
    TaskStatus
  },
  computed: {
    currentTime: {
      get: function () {
        let t = new Date()
        let Y = t.getFullYear()
        let M = t.getMonth() + 1
        let D = t.getDate()
        return Y + '-' + M + '-' + D
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
 #mes-container{
   padding: 8px;
   height: 800px;
   margin: 10px;
 }
  #taskCol {
    font-weight: bold;
    .el-row{
      padding: 2px;
    }
  }
 .taskNum{
   font-size: 35px;
   color: $color-text-option;
 }
 .highTask {
   font-size: 30px;
   color: $color-text-myRed;
 }
  .midTask {
    font-size: 25px;
    color: $color-text-orange;
  }
  .lowTask {
    font-size: 20px;
    color: $color-text-gray;
  }

  .finishTask{
    font-size: 35px;
    color: $color-success;
  }
</style>

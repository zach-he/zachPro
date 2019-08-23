<template>
  <div class="container">
    <nav-menu/>

    <el-container>
      <el-container>
        <el-aside>
          <my-mes/>
        </el-aside>

        <el-main>
          <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="待办任务">
              <todo-task/>
            </el-tab-pane>
            <el-tab-pane label="创建任务">创建任务</el-tab-pane>
            <el-tab-pane label="已完成任务">
              <finish-task/>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>

    <my-footer/>
  </div>
</template>
<script>
import MyFooter from '../common-component/Footer'
import NavMenu from '../common-component/NavMenu'
import MyMes from './components/MyMes'
import TodoTask from './components/TodoTask'
import FinishTask from './components/FinishTask'
export default {
  name: 'Main',
  data () {
    return {

    }
  },
  components: {
    MyFooter,
    NavMenu,
    MyMes,
    TodoTask,
    FinishTask
  },
  computed: {
    currentYear: {
      get: function () {
        let d = new Date()
        return d.getFullYear()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/variables.scss';
  .container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $color-bg;
  }
  .el-container {
    margin:15px auto;
    width: 1280px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 15px;
  }

</style>

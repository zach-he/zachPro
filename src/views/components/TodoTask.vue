<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop=""
        label="任务编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop=""
        label="任务名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop=""
        label="状态">
      </el-table-column>
      <el-table-column
        prop=""
        label="优先级">
      </el-table-column>
      <el-table-column
        prop=""
        label="截至时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TodoTask',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>

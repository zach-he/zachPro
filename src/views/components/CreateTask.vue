<template>
  <div>
    <el-form ref="formData" :model="formData">
      <el-form-item label="任务名" prop="taskname">
        <el-input v-model="formData.taskname"/>
      </el-form-item>
      <el-form-item label="截止时间" prop="deadline">
        <el-date-picker type="date"
        placeholder="选择日期"
        v-model="formData.deadline"
        style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="任务描述" prop="describe">
        <el-input type="textarea" :rows="9" v-model="formData.describe"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="reset('formData')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'CreateTask',
  data () {
    return {
      formData: {
        taskname: '',
        describe: '',
        deadline: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('onSubmit')
    },

    reset (form) {
      console.log('取消')
      this.$refs[form].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

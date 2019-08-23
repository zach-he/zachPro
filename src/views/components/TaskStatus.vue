<template>
  <div>
<el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
  </div>
</template>
<script>
export default {
  name: 'TaskStatus',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>

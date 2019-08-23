<template>
  <div class="login_container">
    <el-form ref="loginForm" :model="form" :rules="loginRules" label-width="60px" class="login-box">
      <h3 class="login-title">Zach软件开发管理系统</h3>

      <el-form-item label="账号" prop="username" class="account">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="pwd">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>

      <el-form-item>
        <el-row>
          <el-button type="primary" v-on:click="onSubmit('loginForm')" class="loginButton">登录</el-button>
          <el-button type="info" @click="reset('loginForm')" class="resetButton">重置</el-button>
        </el-row>
      </el-form-item>
    </el-form>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '../common-component/Footer'
export default {
  name: 'Login',
  components: {
    MyFooter
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      loginRules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit (form) {
      // 为表单绑定验证功能
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          // this.$router.push('/main')
          console.log('login success')
        } else {
          this.$message({
            message: '请输入账号和密码',
            type: 'error'
          })
          return false
        }
      })
    },
    // 重置
    reset (form) {
      console.log('调用了重置方法')
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import'../style/variables.scss';
  .login_container{
    background-image: url(../../static/image/homebkg.jpg);
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 50%;
    position:fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;

    .login-box {
      border: 1px solid #DCDFE6;
      width: 350px;
      margin: 220px auto;
      padding: 35px 35px 15px 35px;
      border-radius: 5px;
      box-shadow: 0 0 25px #909399;

      .loginButton{
        background-color: $color-primary;
      }
      .resetButton{
        background-color: $color-text-gray;
      }

      /deep/ .el-form-item__label{
        font-size: 16px;
        color: $color-primary;
        font-weight: 800;
      }
    }

    .login-title {
      text-align: center;
      margin: 0 auto 40px auto;
      color: $color-primary;
    }
  }
</style>

<template>
    <div class="register-container">
      <div class="register-content">
        <span class="title">欢迎注册</span>
        <div class="create-form">
          <el-form ref="form" :rules="rules" :model="formData" label-width="90px" status-icon>
            <el-form-item label="用户名" prop="loginName">
              <el-input v-model="formData.loginName" placeholder="请使用中文/字母/数字/下划线" maxlength="20" name="register_username"/>
            </el-form-item>
            <el-form-item label="密码" prop="loginPassword">
              <el-input
                v-model="formData.loginPassword"
                auto-complete="off"
                type="password"
                maxlength="16"
                placeholder="长度6-16，至少1个数字和1个字母"
                name="register_pwd"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmedPassword">
              <el-input
                v-model="formData.confirmedPassword"
                auto-complete="off"
                type="password"
                maxlength="16"
                placeholder="请再次输入密码"
                name="register_confirm_pwd"/>
            </el-form-item>
            <el-form-item ref="phone" label="手机号" prop="phone">
              <el-input v-model="formData.phone" placeholder="请输入常用手机号" name="register_phone" maxlength="11"/>
            </el-form-item>
            <el-form-item label="常用邮箱" prop="email">
              <el-input v-model="formData.email" placeholder="请输入邮箱地址" name="register_email" maxlength="80"/>
            </el-form-item>
            <el-form-item class="btn-item">
              <el-button
                :disabled="registering"
                type="primary"
                class="button-primary"
                name="register_btn_signup"
                @click="register">
                提交注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
import {
  usernameValidator,
  passwordValidator,
  phoneValidator,
  emailValidator,
  phoneExistValidator
} from '@/utils/rules'
export default {
  name: 'Register',
  data () {
    return {
      registering: false,
      formData: {
        phone: '',
        email: '',
        loginName: '',
        loginPassword: '',
        confirmedPassword: ''
      },
      rules: {
        loginName: [
          { validator: usernameValidator, trigger: 'blur' }
        ],
        loginPassword: [
          { validator: passwordValidator, trigger: 'blur' }
        ],
        confirmedPassword: [
          { validator: this.confirmedPasswordValidator, trigger: 'blur' }
        ],
        phone: [
          { validator: phoneValidator, trigger: 'blur' },
          { validator: phoneExistValidator, trigger: 'blur' }
        ],
        email: [
          { validator: emailValidator, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    confirmedPasswordValidator (rule, value, callback) {
      if (value !== this.formData.loginPassword) {
        callback(new Error('两次输入密码不一致'))
      }
      callback()
    },

    register () {
      this.registering = true
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          console.log(valid)
          this.formData.loginName = this.formData.loginName.trim()
          this.submitRegister()
        } else {
          this.registering = false
        }
      })
    },

    async submitRegister () {
      try {
        console.log('registe success')
      } catch (e) {
        console.log(e)
      } finally {
        this.registering = false
      }
    }

  }
}
</script>

<style lang="scss" scoped>
@import'../style/variables.scss';
  .register-container {
    text-align: center;
    padding: 42px 0;
    background-color: #f7f7f7;

    .register-content {
      padding-bottom: 36px;
      background-color: white;

    }

    .title {
      display: block;
      padding: 20px 0 40px 0;
      font-size: 18px;
      color: $color-text-primary;
      line-height: 16px;
    }

    .create-form{
      width: 400px;
      margin: 0 auto;

      .code-item{
        /deep/ .el-form-item__content {
          display: flex;

          .el-button {
            height: 36px;
            margin-left: 13px;
            padding: 0 21px;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>

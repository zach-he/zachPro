/* eslint-disable no-useless-escape */
import _ from 'loadsh'

export function isInt (val) {
  const regPos = /^[0-9]*[1-9][0-9]*$/
  return (regPos.test(val))
}

export function isFloat (val) {
  const regPos = /^\d+\.\d+$/
  return (regPos.test(val))
}

function isPhone (val) {
  const reg = /^([0-9]|[-])+$/
  return (reg.test(val))
}

// eslint-disable-next-line no-unused-vars
function isEmpty (val) {
  const reg = /^(\s)*$/
  return (reg.test(val))
}

// eslint-disable-next-line no-unused-vars
function isWechat (val) {
  const reg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/
  return reg.test(val)
}

// eslint-disable-next-line no-unused-vars
function isQQ (val) {
  const qq = /[1-9][0-9]{4,20}$/
  return qq.test(val)
}

// ----------------------------------------------------------------------

export async function usernameValidator (rule, value, callback) {
  console.log('usernameValidator')
  const min = 1
  const max = 20
  value = value.trim()
  if (value.length < min || value.length > max) {
    callback(new Error(`用户名长度应该在${min}-${max}之间`))
  } else {
    // try {
    //   const res = await checkUsernameExist(value)
    //   if (res.data.status === 1) {
    //     callback(new Error('服务器异常'))
    //   } else if (res.data.status === 2) {
    //     callback(new Error(res.data.msg))
    //   } else {
    //     callback()
    //   }
    // } catch (e) {
    //   callback(e)
    // }
    callback()
  }
  callback()
}

export function passwordValidator (rule, value, callback) {
  const min = 6
  const max = 16
  if (value.length < min || value.length > max) {
    callback(new Error(`密码长度应该在${min}-${max}之间`))
    console.log('passwordError')
  } else if (!/^(?=.*[^\d\W])(?=.*\d).+/.test(value)) {
    callback(new Error(`密码至少包含一个数字及一个字母`))
  }
  callback()
}

export function phoneValidator (rule, value, callback) {
  if (!isPhone(value)) {
    callback(new Error('请输入合法电话号码'))
  }
  if (value.length > 20) {
    callback(new Error('长度不超过20'))
  }
  callback()
}

export async function phoneExistValidator (rule, value, callback) {
  // try {
  //   const res = await checkPhoneExist(value)
  //   if (res.data.status === 1) {
  //     callback(new Error('服务器异常'))
  //   } else if (res.data.status === 2) {
  //     callback(new Error(res.data.msg))
  //   } else {
  //     callback()
  //   }
  // } catch (e) {
  //   callback()
  // }
}

export function emailValidator (rule, value, callback) {
  if (value.length > 0 && !/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value)) {
    callback(new Error(`邮箱格式不正确`))
  }
  if (value.length === 0) {
    callback(new Error('邮箱不能为空'))
  }
  callback()
}

export function notEmptyValidator (rule, value, callback) {
  if (_.isEmpty(value)) {
    callback(new Error(`不能为空`))
  }
  callback()
}

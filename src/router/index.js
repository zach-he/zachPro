import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Test from '@/views/Test'
import Main from '@/views/Main'
import Register from '@/views/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

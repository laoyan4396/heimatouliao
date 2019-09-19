import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home/index.vue'// 路由集组件
import Home from './views/home/'
import Login from './views/login'
Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {
      psth: '/',
      redirect: '/home' // 默然进home
    },
    {
      path: '/home',
      // name: 'home',
      component: Home
    }, {
      psth: '/login',
      component: Login
    }
    // 按需加载{
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

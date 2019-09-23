import Vue from 'vue'
import App from './App.vue' // 根组件
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios' // 引入
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/index.less'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

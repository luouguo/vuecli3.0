import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import api from '@/api'
Vue.prototype.$api = api
import i18n from '@/lang/i18n'
Vue.prototype._i18n = i18n
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Toast, Lazyload } from 'vant'
Vue.use(Toast)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  months: {}
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import { Toast, Dialog, Lazyload } from 'vant'

Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Lazyload)
Vue.config.productionTip = false
Vue.prototype.axios = axios
sessionStorage.setItem('UserInfo', JSON.stringify({
  name: '窃瓦辛格',
  sex: '男',
  picture: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=275643910,265451810&fm=11&gp=0.jpg',
  isVip: 1
}))
new Vue({
  router,
  render: h => h(App),
  months: {}
}).$mount('#app')

//  window.document.addEventListener('deviceready', function () {
//   new Vue({
//     router,
//     render: h => h(App),
//     months: {}
//   }).$mount('#app')
//   window.navigator.splashscreen.hide()
// }, false)

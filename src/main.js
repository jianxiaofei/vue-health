import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Toast, Dialog, Lazyload } from 'vant'

Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Lazyload)
Vue.config.productionTip = false

sessionStorage.setItem('UserInfo', JSON.stringify({
  name: '窃瓦辛格',
  sex: '男',
  picture: 'http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1',
  isVip: 1
}))
new Vue({
  router,
  render: h => h(App),
  months: {}
}).$mount('#app')

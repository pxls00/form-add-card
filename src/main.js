import Vue from 'vue'
import App from './App.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import './assets/scss/main.scss'
import VueMask from 'vue-the-mask'
Vue.use(VueMask)
Vue.component('SvgIcon', SvgIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

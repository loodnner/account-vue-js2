import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'




Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Button',Button)
Vue.component('Icon',Icon)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

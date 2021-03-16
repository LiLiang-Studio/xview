import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../../xview-ui/src/theme/index.scss'
import XView from '../../xview-ui/src'

Vue.use(XView)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

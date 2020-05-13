import Vue from 'vue'
import App from './App.vue'

//font-awsome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

////font-awsome setup
library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')

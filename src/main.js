import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//font-awsome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faListUl, faFire, faComments, faGreaterThanEqual, faBell, faQuestionCircle, faCamera, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

//font-awsome setup
library.add(faSearch, faListUl, faFire, faComments, faGreaterThanEqual, faBell, faQuestionCircle, faCamera, faEdit);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

//font-awsome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

//font-awsome setup
library.add(faSearch);
library.add(faListUl);
library.add(faFire);
library.add(faComments);
library.add(faGreaterThanEqual);
library.add(faBell);
library.add(faQuestionCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')

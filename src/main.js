import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css'

library.add(faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

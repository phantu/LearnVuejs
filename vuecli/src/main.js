import Vue from 'vue'
import Contact from './contact.vue'
import Dulieu from './App.vue'


Vue.component('contact-component',Contact);

new Vue({
  el: '#app',
  render: h => h(Dulieu)
})

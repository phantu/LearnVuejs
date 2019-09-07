import Vue from 'vue'
import Contact from './contact.vue'
import Dulieu from './App.vue'

Vue.component('contact-component',Contact);
export const eventbus = new Vue({
  methods:{
    changeage(age){
      this.$emit('testchangeage',age);
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(Dulieu)
})

<template>
  <div>
      <h1>Name : {{reserve()}}</h1>
      <h1>Tuổi : {{Userage}} </h1>
      <button @click="resetname" class="btn">
          reset name 1
      </button>
      <button @click="resetnamefn()" class="btn">
          callback name
      </button>
  </div>
</template>



<script>
import {eventbus} from './main.js'
export default {
  props:{
    name:{},
    Userage:Number,
    resetnamefn: Function
  },
  methods: {
    reserve(){
      return this.name.split(" ").reverse().join(" ");
    },
     resetname(){       
        this.name = 'tan oc cho';
        this.$emit('testchange',this.name);
        
    },
  },
  created(){
    eventbus.$on('testchangeage',(age)=> {
      this.Userage = age;
    })
  }

}

</script>

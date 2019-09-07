<template>
  <div>
      <h1>Name : {{reserve()}}</h1>
      <h1>Tuổi : {{Userage}}</h1>
      <button @click="resetname" class="btn">
          reset name 1
      </button>
      <button @click="resetnamefn()" class="btn">
          call back name 2
      </button>
      <button @click="changeage" class="btn" >True Age</button>
       <br>
  </div>
</template>



<script>
import {eventbus} from './main.js';
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
    changeage(){
        this.Userage = 30;
        // this.$emit('testchangeage',this.Userage); thay đổi thông qua cpn cha
        // eventbus.$emit('testchangeage',this.Userage);
        eventbus.changeage(this.Userage);
    },
     resetname(){       
        this.name = 'tan oc cho';
        this.$emit('testchange',this.name);
        
    },
  },

}

</script>

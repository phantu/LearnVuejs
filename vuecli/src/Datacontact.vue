<template>
  <div>
      <h1>Adrees or phone : {{reserve()}}</h1>
      <button @click="resetname" class="btn">
          reset name 1
      </button>
      <button @click="resetnamefn()" class="btn">
          reset name 2
      </button>
       <br>
  </div>
</template>



<script>
export default {
  props:{
    name:{},
    resetnamefn: Function
  },
  methods: {
    reserve(){
      return this.name.split("").reverse().join("");
    },
     resetname(){       
        this.name = 'tan oc cho';
        this.$emit('testchange',this.name);
        
    },
  },

}

</script>

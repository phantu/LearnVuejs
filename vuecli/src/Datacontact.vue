<template>
  <div>
      <h1>Adrees or phone : {{reserve()}}</h1>
      <button @click="resetname" class="btn">
          reset phone
      </button>
       <br>
  </div>
</template>



<script>
export default {
  props:['name'],
  methods: {
    reserve(){
      return this.name.split("").reverse().join("");
    },
     resetname(){       
        this.name = 'tan oc cho';
        this.$emit('testchange',this.name);
        
    }
  },

}

</script>

<template>
  <div  class="row">
      <appItem v-for="(item, index) in items" :key="index"  v-bind:data="item" @click.native="removeitem(index)" >{{item}}</appItem>
  </div>
</template>

<script>
import Items from './item';
export default {
    props:['items'],
  data:function(){
    return{
      item:[]
    }
    
  },
  methods:{
      removeitem(index){
          this.$emit('remove',index);
      }
  },
  
  components:{
      appItem : Items
  }
}
</script>


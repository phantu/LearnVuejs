<template>
  <div class="container" id="app">
    <appnewitem @itemadded='addItem'></appnewitem>
    <appitemlayout @remove='removeItem' :items="item"></appitemlayout>
    <appheader :itemCount="item.length" :maxitem="maxitem"></appheader>
  </div>
</template>

<script>
import layoutitem from './component/itemlayout'
import newitem from './component/newitem'
import header from './component/HeaderProgress'

export default {
  data:function(){
    return{
      item:[
      ],
      maxitem : 10

    }
    
  },
   methods:{
      addItem(item){
          
          if (this.item.length >= this.maxitem) {
            alert('Enough ! Pleas stop ok ! ');
          }else{
            this.item.push(item)
          }
      },
      removeItem(index){
        this.item.splice(index,1)
      }
  },
  components:{
    appitemlayout : layoutitem,
    appnewitem : newitem,
    appheader : header

  }
}
</script>


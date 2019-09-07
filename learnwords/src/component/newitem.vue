<template>
    <form action="">
        <div class="col-sm-8 col-md-6 col-lg-3 form-group" id="">
            <label > Say ? Say </label>
            <textarea name="" v-model="item" id="" cols="30" rows="10"></textarea>
        </div>

        <div class="col-sm-8 col-md-6 col-lg-3 form-group" id="">
            <button class="btn btn-success" @click.prevent="creatnew">add</button>
        </div>
    </form>  
</template>

<script>

export default {
  data:function(){
    return{
     item: '' 
    }
  },
  methods:{
      creatnew() {
          if (this.item == '' | this.item == ' ' ) {
            return false;    
          }else{
              this.$emit('itemadded',this.item);
              this.item = '';
          }
          
      },
  },
 
  components:{

  }
}
</script>

<style lang="">
    
</style>
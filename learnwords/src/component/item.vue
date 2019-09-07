<template>
  <div class="col-sm-6 col-md-4 col-lg-3" id="">
      <div class="card">
          <div class="card-body item">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data:function(){
    return{
      item:[
        'abc'
      ],
      maxitem : 10

    }
    
  },
  
  components:{
  }
}
</script>

<style lang="">
    .card-body{
        font-size: 24px;
        color: red;
    }
    .item{
        cursor: pointer;
    }
    .item:hover{
        background: whitesmoke;
    }
</style>
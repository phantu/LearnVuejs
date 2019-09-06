<template>
  <div >
    <h2>{{cardDM}}</h2>
    <p>This is my contact</p>
    <slot name="content"></slot>
    <slot name="title"></slot>
    
  </div>
</template>

<script>
export default {
  props:['cardDM']
}
</script>

<style scoped>
  div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
    padding: 30px;
    margin: 20px auto;
    text-align: center;
  }
</style>

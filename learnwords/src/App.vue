<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button @click="Slectedcpn='appCart'" class="btn btn-danger">Card</button>
          <button @click="Slectedcpn='appAbout'" class="btn btn-danger">About</button>
          <button @click="Slectedcpn='appContact'" class="btn btn-danger">Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- <appCart cardDM="cart2" ><p slot="title">This is my car</p><p slot="content">This is my car 2</p></appCart> -->
          <keep-alive><component :is="Slectedcpn"></component></keep-alive>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import Card from '../src/component/Card';
import Contact from '../src/component/Contact';
import About from '../src/component/About';
export default {
  data:function(){
    return{
      Slectedcpn:'appCart'
    }
    
  },
  components:{
    appCart : Card,
    appContact : Contact,
    appAbout : About
  }
}
</script>


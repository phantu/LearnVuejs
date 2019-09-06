<template>
    <div>
        <h1>Contact Form</h1>
        <p>i am {{name}}</p>
        <data-contact-component :name="name" @testchange="name = $event" :resetnamefn="resetname2" ></data-contact-component>
        <button @click="changename">Change name</button>
    </div>  
</template>


<script>
import DataContact from './Datacontact.vue';
export default {
   
    data:function() {
        return{
        name : 'tan cho'
        }   
    },
     methods:{
        changename(){
         this.name = 'tan cho oc'
        },
        resetname2(){
         this.name = 'tan cho oc 2'
        },
    },
    components:{
        'data-contact-component' : DataContact
    }
}
</script>

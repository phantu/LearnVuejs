<template>
    <div>
        <h1>Contact Form</h1>
        <p>Name {{name}}</p>
        <h1>Tuổi : {{age}} </h1>
        <hr>
        <data-contact-component 
            :name="name"
            @testchange="name = $event" 
            :resetnamefn="resetname2"
            :Userage="age" >
        </data-contact-component>
        <button @click="changename">Change name</button>
        <hr>
        <data-contact-component2 
            :name="name"
            @testchange="name = $event"
            :resetnamefn="resetname2"
            :Userage="age"
            @testchangeage="age = $event" >
        </data-contact-component2>
    </div>  
</template>


<script>
import DataContact from './Datacontact.vue';
import DataContact2 from './Datacontact2.vue';
export default {
   
    data:function() {
        return{
        name : 'tan cho',
        age:'18'
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
        'data-contact-component' : DataContact,
        'data-contact-component2' : DataContact2,
    }
}
</script>

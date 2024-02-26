<template>
    <div class="container">
    <div v-if="open" class="start-btn-sec">
        <div class="image-field">
        <img :src="HomeImage" alt="">
        </div>
        <div class="text-sec">
            <div class="logo">
                <h1 class="one">Q</h1>
                <h3 class="two">Z</h3>
            </div>
        <h3>Let's Find Out How Good You Are...!!</h3>
        <button @click="openCount">Start Quiz</button>
    </div>
    </div>
    <div v-else class="timer_sec">
          <TimerComp/>
    </div>
 
    </div>
</template>

<script setup>
import HomeImage from "@/assets/HomePage.png"
import { defineAsyncComponent } from "vue";
import { ref } from "vue";
const open =ref(true);
const TimerComp = defineAsyncComponent(()=>
 import('@/components/TimerComp.vue')
)
const openCount = () =>{
    open.value= false ;
}
</script>

<style scoped>
.container{
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-field{
  margin-left:50px;
  width:600px;
  height:600px;
  object-fit: contain;
  overflow: hidden;
}
img{
    width:100%;
    height:100%;
    animation: popup 5s ease-in-out;
}
@keyframes popup {
  0% { transform: translateX(500px); }
  100% {transform:translateX(0px)}
}

.start-btn-sec{
    display: flex;
    flex-direction: row-reverse;
}
.one{
    font-size:60px;
}
.two{
    font-size:40px;
    margin-top: -23px;
    margin-right: -50px;
}
.text-sec{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:40px;
    position: relative;
}
.logo{
    position: absolute;
    top:5px;
    left:5px;
    margin-left: -30px;
}
h3{
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 2px;
}
button{
    width:150px;
    height:30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;

}
</style>
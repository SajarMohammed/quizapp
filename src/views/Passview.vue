<template>
  <div class="container">
   <div class="top_sec">
    <div class="text_sec">
      <h1>Congratulations</h1>
      <h3>You have Passed the Quiz...!!</h3>
       <p>Correct Answers : {{ correctAnswers }}</p>
       <p>Incorrect Answers : {{ IncorrectAnswers }}</p>
       <p>Average: {{ averaged }}%</p> 
    </div>
  <div class="btn_sec">
    <h3>Wanna Take the Quiz Once More...?</h3>
    <router-link to="/"><button>Take Quiz</button></router-link>
  </div>   <div class="image_area">
          <img :src="crack" alt="" class="popper">
       </div></div>
    <div class="image_sec">
      <img :src="Pass" alt="" class="avatar">
    </div>
  </div>
    
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import Pass from "@/assets/pass.jpg"
  import crack from "@/assets/crackers.png"
  const route = useRoute()
  const correctAnswers = route.query.correctAnswers
  const totalQuestions = 10;
  const averaged = (correctAnswers / totalQuestions)*100;
  const IncorrectAnswers = (totalQuestions - correctAnswers)
</script>

<style scoped>
.container{
  width:100vw;
  height:90vh;
  display: flex;
  align-items: center;
  justify-items: center;
  gap:20px;
}
.image_sec{
  flex: 1;
}
.avatar{
  padding-right: 20px;
  animation: popup 5s infinite ease-in-out;
}
@keyframes popup {
  0%, 100% { transform: translateY(0); }
  50% {transform:translateY(50px)}
}
.popper{
  animation: cracker 5s infinite ease-in-out;
}
@keyframes cracker {
  0%, 100% { transform: scale(1); opacity: 0; }
  50% {transform: scale(1.1); opacity: 1;}
}
.top_sec{
  flex:1;
  position: relative;
}
.image_area{
  position: absolute;
  top: -60px;
  left: 450px;
  z-index: -999;
}
.text_sec{
  margin-left:20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:30px;
}
h1{
  letter-spacing: 5px;
  animation: scaleup 5s infinite ease-in-out;
}
@keyframes scaleup {
  0%, 100% { transform: scale(1); }
  50% {transform:scale(1.2)}
}
h3{
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Courier New', Courier, monospace;
}
p{
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
}
.btn_sec{
  margin-top:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:30px;
  text-align: center;
}
button{
  width:150px;
  height:30px;
  border-radius: 6px;
  border: 1px solid black;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
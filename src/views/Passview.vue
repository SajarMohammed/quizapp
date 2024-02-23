<template>
  <div class="container">
    <div class="text_sec">
      <h1>Congratulations</h1>
      <h3>You have Passed the Quiz...!!</h3>
       <p>Correct Answers : {{ correctAnswers }}</p>
       <p>Incorrect Answers : {{ IncorrectAnswers }}</p>
       <p>Average: {{ averaged }}%</p>
    </div> 
    <div class="image_sec">
      <img :src="Pass" alt="">
    </div>
  </div>
    
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import Pass from "@/assets/pass.jpg"
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
img{
  padding-right: 20px;
  animation-name: popup;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes popup {
  0%, 100% { transform: translateY(0); }
  50% {transform:translateY(50px)}
}
.text_sec{
  flex:1;
  margin-left:20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
}
h1{
  letter-spacing: 5px;
  animation-name: scaleup;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
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
</style>
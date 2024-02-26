<template>
    <div class="container">  
      <div class="top_sec">
        <div class="text_sec">
            <h1>Oops...!!  You couldn't Made it</h1>
            <h3>You have Failed in the Quiz</h3>
       <p>Correct Answers : {{ correctAnswers }}</p>
       <p>Incorrect Answers : {{ IncorrectAnswers }}</p>
       <p>Average: {{ averaged }}%</p>
        </div>
        <div class="btn_sec">
          <h3>Don't Lose Hope...<br/> There is Still A Chance ...</h3>
          <router-link to="/"><button>Take Quiz Again</button></router-link>
        </div>
      </div>
        <div class="image_sec">
           <img :src="Failed" alt=""> 
        </div>
      
     
    </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import Failed from "@/assets/failure.jpg"
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
  gap:10px;
}
image_sec{
  flex: 1;
}
img{
  padding-right: 40px;
  animation: popup 5s infinite ease-in-out;
}
@keyframes popup {
  0%,100% { transform:  rotate(-8deg); }
  50% {transform:rotate(8deg)}
}
.top_sec{
  flex:1;
}
.text_sec{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:30px;
}
h1{
  letter-spacing: 2px;
  font-family: 'Courier New', Courier, monospace;
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
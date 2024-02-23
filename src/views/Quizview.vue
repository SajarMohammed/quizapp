<style scoped>
 .top_sec{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top:0;
  z-index: 999;
  background-color: black;
  color:beige;
 }
 .qstns{
  margin-left: 20px;
 }
 h3{
  font-family: 'Courier New', Courier, monospace;
 }
  span{
    font-size: 20px;
  }
 .count{
  margin-right: 30px;
 }
 .qstncntr{
  padding-top: 15px ;
  padding-left: 50px;
 }
 .question{
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
 }
 .options{
  display: flex;
  gap: 10px;
 }
 input{
  padding-top: 15px ;
 }
 .btn{
  margin: 20px auto;
 }
</style>
<template>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="error">
    Error: {{ error.message }}
  </div>
  <div v-else>
  <div class="top_sec"> 
     <div class="qstns">
   <h3 > Questions Answered: {{ numberOfQuestionsAnswered }} / 10</h3>
  </div>
  <div class="count">
    <span>{{ count }}</span></div>
  </div> 
    <div v-for="qstn in combinedQuestions" :key="qstn.question" class="qstncntr">
      <h2 class="question">Q. {{ qstn.question }}</h2>
      <div v-for="answer in qstn.allAnswers" :key="answer" class="options">
        <input 
          type="radio" 
          :name="qstn.question" 
          :id="answer" 
          :value="answer"
          @change="handleAnswerSelection(qstn.question, answer)">
        <label :for="answer" >{{ answer }}</label>
      </div>
    </div>
    <div class="btn">
    <button :disabled="!allQuestionAnswered" @click="evaluateAnswers">Submit Quiz</button>
  </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import { useFetch } from '@/composables/fetch.js';

const router = useRouter();
const url = "https://opentdb.com/api.php?amount=10";
const data = ref(null);
const loading = ref(true);
const error = ref(null);
const count = ref(60);
const correctAnswersCount = ref(0);
const userAnswers = ref({})

onMounted(async () => {
  try {
    const fetchData = await useFetch(url);
    data.value = fetchData;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
});
function handleAnswerSelection(question, answer) {
  userAnswers.value[question] = answer;
}
const numberOfQuestionsAnswered = computed(() => {
  return Object.keys(userAnswers.value).length;
});
const allQuestionAnswered = computed(()=>{
  const answeredQuestions = Object.keys(userAnswers.value).length === data.value.results.length;
  console.log(answeredQuestions);
  return answeredQuestions;
})

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
const countdown = () =>{
  if(count.value > 0){
    setTimeout(()=>{
     count.value--;
     if (count.value == 0) {
        evaluateAnswers()
      } else {
        countdown();
      }
    },1000)
  }
}
// onMounted(()=>{
//   countdown()
// })
const evaluateAnswers = () => {
  correctAnswersCount.value = data.value.results.filter(qstn => userAnswers.value[qstn.question] === qstn.correct_answer).length;
  const correctCount = correctAnswersCount.value; 
  const passed = correctCount >= data.value.results.length / 2; 
  if (passed) {
    router.push({ name: 'pass', query: { correctAnswers: correctCount } });
  } else {
    router.push({ name: 'fail', query: { correctAnswers: correctCount } });
  }
};

const combinedQuestions = computed(() => {
  if (!data.value) return [];
  return data.value.results.map((qstn) => {
    const allAnswers =shuffle( [qstn.correct_answer, ...qstn.incorrect_answers]);
    return { ...qstn, allAnswers };
  });
});
</script>

<template>
  <div>
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="#eee"
        stroke-width="12"
      />
       
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="#007bff"
        stroke-width="12"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashoffset"
        stroke-linecap="round"
        transform="rotate(-90, 60, 60)"
      />
      <text
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-size="20" 
        fill="#333">
        {{ timerCount }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const timerCount = ref(10); 
const totalDuration = ref(10); 
const radius = 54; 
const circumference = 2 * Math.PI * radius; 
const dashoffset = computed(() => 
  circumference * (1 - timerCount.value / totalDuration.value)
);

const startCountdown = () => {
  if (timerCount.value > 0) {
    setTimeout(() => {
      timerCount.value--;
      if (timerCount.value == 0) {
        router.push("/quiz");
      } else {
        startCountdown();
      }
    }, 1000);
  }
};

onMounted(() => {
  startCountdown();
});
</script>

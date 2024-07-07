<template>
  <div class="countdown">
     <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-9h4v2h-6v-6h2v4z" fill="#007bff"/>
        </svg>
    <div class="countdown-content">
      <div class="countdown-box">
       
        <span class="time">{{ days }}</span>
        <span class="label">Days</span>
      </div>
      <div class="countdown-box">
        
        <span class="time">{{ hours }}</span>
        <span class="label">Hours</span>
      </div>
      <div class="countdown-box">
      
        <span class="time">{{ minutes }}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="countdown-box">
     
        <span class="time">{{ seconds }}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const targetDate = new Date('2024-07-07T00:00:00').getTime() + 30 * 24 * 60 * 60 * 1000;
const intervalId = ref<number | undefined>(undefined);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const calculateTime = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(intervalId.value);
    days.value = hours.value = minutes.value = seconds.value = 0;
  }
};

onMounted(() => {
  calculateTime();
  intervalId.value = setInterval(calculateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
});
</script>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f0f4f8;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.countdown-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  color: #333;
}

.time {
  font-size: 2.5rem;
  font-weight: bold;
}

.label {
  font-size: 1rem;
  color: #555;
}
</style>

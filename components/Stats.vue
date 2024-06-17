<template>
  <div class="experience">
    <div class="experience__title">16 Years Of Experience</div>
    <div class="experience__stats">
      <div class="experience__stat" v-for="(stat, index) in stats" :key="index">
        <span class="experience__number">{{ animatedNumbers[index] }}</span>
        <span class="experience__description">{{ stat.description }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const stats = [
  { number: 27, description: "Ongoing Projects" },
  { number: 493, description: "Finished Cases" },
  { number: 350, description: "Satisfied Customers" },
  { number: 160, description: "Employees Worldwide" },
];

const animatedNumbers = ref(stats.map(() => 0));

const animateNumbers = (targetNumber: number, index: number) => {
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const counter = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    animatedNumbers.value[index] = Math.round(targetNumber * progress);

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

onMounted(() => {
  stats.forEach((stat, index) => {
    animateNumbers(stat.number, index);
  });
});
</script>

<style lang="scss" scoped>
.experience {
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(100deg, #6e7bff, #27beff);
  padding: 20px;
  text-align: center;
  color: white;
  border-radius: 0 78px;
  height: auto;
  box-sizing: border-box;

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  &__number {
    font-size: 3rem;
    font-weight: bold;
  }

  &__description {
    font-size: 14px;
  }
}

@media (min-width: 600px) {
  .experience {
    width: 80%;

    &__title {
      font-size: 28px;
    }

    &__number {
      font-size: 4rem;
    }

    &__description {
      font-size: 16px;
    }
  }
}

@media (min-width: 992px) {
  .experience {
    width: 70%;
    height: 30vh;

    &__title {
      font-size: 36px;
    }

    &__stats {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 100px;
    }

    &__stat {
      margin-bottom: 0;
    }

    &__number {
      font-size: 5rem;
    }

    &__description {
      font-size: 18px;
    }
  }
}
</style>

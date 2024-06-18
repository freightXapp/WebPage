<template>
  <div class="features">
    <div class="intro-container">
      <div class="intro-text">
        <h1>Comprehensive Freight Management Solutions</h1>
        <p>
          Experience seamless transport management with our comprehensive
          solutions that encompass precision planning, real-time tracking,
          efficient communication, and cost optimization. Enhance your logistics
          operations with our innovative and reliable tools designed to ensure
          smooth, secure, and economical transportation.
        </p>
      </div>
    </div>
    <div class="features-container">
      <div
        v-for="(featur, index) in featureData"
        :key="featur.title + index"
        class="feature"
      >
        <div class="icon">
          <component :is="featur.icon" :filled="''" class="icon" />
        </div>
        <h3>{{ featur.title }}</h3>
        <p>{{ featur.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  featureData: {
    icon: string;
    title: string;
    description: string;
  }[];
}

withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss" scoped>
.features {
  width: 70%;
  margin: 0 auto;
}
.features-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 3% 2rem;

  @media (min-width: $breakpoint_verysmall) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $breakpoint_medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.intro-container {
  width: 90%;
  margin: 2rem 2rem 1rem;

  @media (min-width: $breakpoint_verysmall) {
    width: 75%;
  }

  @media (min-width: $breakpoint_medium) {
    width: 60%;
    text-align: left;
  }

  @media (min-width: $breakpoint_large) {
    width: 50%;
  }
}

.intro-text h1 {
  font-size: 2.5rem;
  color: var(--dark-blue);
  margin-bottom: 1rem;

  @media (min-width: $breakpoint_small) {
    text-align: left;
    font-size: 2.7rem;
  }

  @media (min-width: $breakpoint_medium) {
    font-size: 3rem;
    text-align: left;
  }
}

.intro-text p {
  font-size: 1.5rem;
  color: var(--text-grey);

  @media (min-width: $breakpoint_small) {
    font-size: 1.6rem;
  }

  @media (min-width: $breakpoint_medium) {
    font-size: 1.8rem;
  }
}
.feature {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border: 0.1rem solid #ccc;
  border-radius: 5px;

  transition: all 0.25s cubic-bezier(0.83, 0.16, 0.38, 0.9) 0s;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  .icon {
    height: 5rem;
    width: 5rem;
  }

  h3 {
    margin: 2rem 0 1rem;
    color: var(--dark-blue);
    font-size: 1.7rem;
    font-weight: 500;
  }

  p {
    color: var(--text-grey);
    font-size: 1.7rem;
    font-weight: 300;
  }
}
</style>

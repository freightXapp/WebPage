<template>
  <div>
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
.features-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 7% 2rem;

  @media (min-width: $breakpoint_verysmall) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $breakpoint_medium) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature {
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

<template>
  <section class="main">
    <div class="main__container">
      <div class="main__image-wrapper">
        <img :src="serviceImg" alt="Service Image" class="main__image" />
        <div class="main__overlay" :style="{ background: bgColor }" />
      </div>
      <div class="main__text-wrapper">
        <div class="main__text-container">
          <h1>{{ title }}</h1>
          <p class="main__description">{{ description }}</p>
          <div class="main__button-container">
            <BaseButton
              :bg-color="'var(--pc2-orange-button)'"
              :button-text="'Start for free'"
            />
          </div>
        </div>
      </div>
      <div class="main__octagon">
        <svg
          width="128"
          height="128"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,10 80,20 90,50 80,80 50,90 20,80 10,50 20,20"
            fill="rgba(0, 31, 63, 1)"
            stroke="white"
            stroke-width="10"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import serviceImg from "~/assets/BaseIcons/truck-services.jpg";

interface Props {
  title?: string;
  description?: string;
  bgColor: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss" scoped>
:deep(.button::after) {
  width: 3.9rem;
  height: 4.2rem;
  top: 0;
  border: 0.4rem solid white;
  right: -0.3rem;
}
:deep(.button) {
  height: 4rem;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible; /* Ensure the main section allows overflow to be visible */
  padding: 80px 0;
  &__container {
    position: relative;
    width: 100%;
    max-width: 100vw;
    margin-bottom: -1rem;
    text-align: center;
    height: 40vh; /* Adjust for mobile first */
    overflow: visible; /* Ensure the container allows overflow to be visible */
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 2;
    padding: 1rem;
    text-align: center;

    h1 {
      margin-top: 1rem;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .main__description {
      display: none; /* Hide description on mobile */
    }
  }

  &__button-container {
    justify-content: center;
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  &__octagon {
    position: absolute;
    bottom: -70px; /* Half the height of the octagon */
    left: 46%;
    z-index: 3;
  }

  @media (min-width: 600px) {
    /* $breakpoint_small equivalent */
    &__text-wrapper {
      width: 80%;

      .main__description {
        display: block; /* Show description on small screens and up */
      }

      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 768px) {
    /* $breakpoint_medium equivalent */
    &__text-wrapper {
      width: 70%;

      h1 {
        font-size: 3rem; /* larger screens */
      }

      p {
        font-size: 1.5rem; /* larger screens */
      }
    }
  }

  @media (min-width: 1024px) {
    /* $breakpoint_large equivalent */
    &__container {
      height: 50vh; /* Adjust height for large desktops */
    }

    &__text-wrapper {
      width: 60%;

      h1 {
        font-size: 3.5rem; /* large desktops */
      }
    }
  }
}
</style>

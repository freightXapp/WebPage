<template>
  <section class="main">
    <div class="main__container">
      <div class="main__image-wrapper">
        <img :src="serviceImg" alt="Service Image" class="main__image" />
        <div class="main__overlay"></div>
      </div>
      <div class="main__text-wrapper">
        <div class="main__text-container">
          <h1>Ready to level up your earnings?</h1>
          <div class="main__button-container">
            <BaseButton
              :bg-color="'var(--pc2-orange-button)'"
              :button-text="'Start for free'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import serviceImg from "~/assets/BaseIcons/truck-services.jpg";
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
  overflow: hidden;

  &__container {
    position: relative;
    width: 100%;
    max-width: 100vw;
    margin-bottom: -1rem;
    text-align: center;
    height: 30vh;
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
    background: linear-gradient(
      to bottom,
      rgba(0, 105, 180, 0.8) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
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
  }

  &__button-container {
    justify-content: center;
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: $breakpoint_small) {
    &__text-wrapper {
      width: 80%;
    }

    &__text-container {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: $breakpoint_medium) {
    &__text-wrapper {
      width: 70%;
    }

    &__text-container {
      h1 {
        font-size: 3rem; /* larger screens */
      }

      p {
        font-size: 1.5rem; /* larger screens */
      }
    }
  }

  @media (min-width: $breakpoint_large) {
    &__container {
      height: 40vh; /* Adjust height for large desktops */
    }

    &__text-container {
      h1 {
        font-size: 3.5rem; /* large desktops */
      }
    }
  }
}
</style>

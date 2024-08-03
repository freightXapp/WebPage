<template>
  <div
    class="promo-container"
    :class="{ reverse: reverse }"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="promo-image">
      <img :src="image" :alt="imageAlt" :class="{ rotate: rotate }" />
    </div>
    <div class="promo-text" :class="{ 'promo-text--reverse': reverse }">
      <h2>
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  rotate: boolean;
  backgroundColor?: string;
}

withDefaults(defineProps<Props>(), {
  reverse: false,
  rotate: false,
});
</script>

<style lang="scss" scoped>
.rotate {
  rotate: 10deg;
}

.promo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 80%;
  border-radius: 8px;
  flex-direction: column;
  overflow: hidden;

  .promo-image img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .promo-text {
    max-width: 100%;
    margin-left: 0;
    margin-top: 10%;

    h2 {
      font-size: 2.5rem;
      color: var(--dark-blue);
    }

    p {
      margin-top: 2rem;
      font-size: 1.7rem;
      font-weight: 300;
      color: var(--text-grey);
    }
  }

  @media (min-width: $breakpoint_small) {
    flex-direction: row;
    padding: 2rem;

    .promo-image {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 50%;
    }

    .promo-text {
      max-width: 70%;
      width: 70%;
      margin-left: 10%;
    }

    .promo-text--reverse {
      margin-left: 0;
      margin-right: 10%;
    }
  }

  @media (min-width: $breakpoint_medium) {
    overflow: initial;
    .promo-image img {
      z-index: 1;
    }

    .promo-text {
      margin: 0 5%;

      h2 {
        font-size: 3rem;
      }

      p {
        font-size: 2.5rem;
      }
    }
  }

  @media (min-width: $breakpoint-large) {
    .promo-text {
      h2 {
        font-size: 3.5rem;
      }

      p {
        font-size: 3rem;
      }
    }
  }
}

@media (min-width: $breakpoint_small) {
  .reverse {
    flex-direction: row-reverse;
  }
}
</style>

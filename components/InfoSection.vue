<template>
  <section class="pickup-section">
    <div class="pickup-section__content" :class="{ reverse: reverse }">
      <div class="pickup-section__text">
        <h1 class="pickup-section__title">{{ title }}</h1>
        <VerticalRoadmap v-if="roadmapPoints" :points="roadmapPoints" />
        <p
          v-for="(paragraphText, index) in description"
          v-else
          :key="paragraphText + index"
        >
          {{ paragraphText }}
        </p>
        <BaseButton
          v-if="buttonText"
          class="pickup-section__text--button"
          :bg-color="buttonColor"
          :button-text="buttonText"
        />
      </div>
      <div class="pickup-section__illustration">
        <img :src="illustration" :alt="title" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  description?: string[];
  illustration: string;
  reverse: boolean;
  buttonText?: string;
  buttonColor?: string;
  roadmapPoints?: string[];
}

withDefaults(defineProps<Props>(), {
  reverse: false,
  buttonText: "Explore Docs",
  buttonColor: "var(--pc2-orange-button)",
});
</script>

<style lang="scss" scoped>
.pickup-section {
  .pickup-section__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    @media (min-width: $breakpoint_small) {
      flex-direction: row;

      &.reverse {
        flex-direction: row-reverse;
      }
    }

    .pickup-section__text {
      order: 2;
      position: relative;
      flex: 1;

      &::after {
        position: absolute;
        content: "";
        width: 30%;
        z-index: 1;
        top: 0px;
        left: 5%;
        height: 100%;
        background-size: 18px 18px;
        background-image: radial-gradient(
          rgba(47, 106, 217, 0.4) 20%,
          transparent 20%
        );
        opacity: 0.2;
      }

      h1 {
        font-size: 3rem;
        margin-bottom: 3rem;
        text-transform: uppercase;
        color: var(--dark-blue);
      }

      p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        font-weight: 300;
      }

      &--button {
        display: flex;
        justify-content: flex-start;
        margin: 2rem 10%;
        width: auto;
      }
    }

    .pickup-section__illustration {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        width: 100%; /* Ensure the images take up the full width */
        max-height: 400px; /* Set a maximum height for consistency */
        object-fit: contain; /* Ensure the images scale properly */
      }
    }
  }

  @media (min-width: $breakpoint_mobiletabs) {
    .pickup-section__content {
      .pickup-section__illustration {
        img {
          max-width: 100%; /* Ensure the images take up the full width */
          max-height: 400px; /* Set a maximum height for consistency */
        }
      }

      .pickup-section__text {
        h1 {
          margin: 1rem 3% 0;
        }

        p {
          margin: 2rem 3%;
        }
      }
    }
  }

  @media (min-width: $breakpoint_small) {
    .pickup-section__content {
      .pickup-section__illustration {
        img {
          max-width: 100%; /* Ensure the images take up the full width */
          max-height: 400px; /* Set a maximum height for consistency */
        }
      }

      .pickup-section__text {
        max-width: 50%;
      }
    }
  }

  @media (min-width: $breakpoint_medium) {
    .pickup-section__content {
      .pickup-section__text {
        margin-left: 4%;

        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1.6rem;
        }
      }

      .pickup-section__illustration {
        img {
          width: 100%;
          max-width: 70%; /* Ensure the images take up the full width */
          max-height: 400px; /* Set a maximum height for consistency */
        }
      }
    }
  }

  @media (min-width: $breakpoint_large) {
    .pickup-section__content {
      .pickup-section__illustration {
        img {
          width: 100%;
          max-width: 90%; /* Ensure the images take up the full width */
          max-height: 400px; /* Set a maximum height for consistency */
        }
      }

      .pickup-section__text {
        width: auto;
        margin-left: 10%;

        p,
        h1 {
          margin: 2rem 10%;
        }
        h1 {
          font-size: 3.5rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>

<template>
  <section
    :class="['service-section', { 'reverse-direction': index % 2 !== 0 }]"
  >
    <div class="section">
      <div class="section__row">
        <div class="section__column fadeInRight animated">
          <div class="section__inner">
            <div class="section__content">
              <div class="section__title">
                <div class="section__sub-container">
                  <component :is="imageSvg" :filled="''" class="section__svg" />
                  <span class="section__sub-title">{{ imageTitle }}</span>
                </div>
                <h2 class="section__title">{{ title }}</h2>
              </div>

              <div class="section__description" v-html="text" />
            </div>
            <div class="section__btn-box">
              <BaseButton
                :button-text="buttonText"
                :link-path="`/${imageTitle.toLowerCase()}`"
                :bg-color="buttonColor"
              />
            </div>
          </div>
        </div>

        <div class="section__image-container">
          <div class="section__inner">
            <div class="section__image-box">
              <figure class="section__image">
                <img :src="image" :alt="title" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import defaultImage from "../assets/BaseIcons/default.png";
interface Props {
  text: string;
  imageSvg: any;
  title: string;
  buttonText?: string;
  imageTitle: string;
  image?: string;
  index: number;
  buttonColor: string;
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: "Our Services",
  image: defaultImage,
});
</script>
<style lang="scss" scoped>
:deep(.button-container) {
  width: 100%;
}

.service-section {
  margin-bottom: 15rem;
}

.section {
  max-width: $breakpoint-maxsize;
  margin: 3% auto 10rem auto;
  padding: 0 1.5rem;
  @media (min-width: $breakpoint-large) {
    margin: 5% auto;
  }

  &__svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
  &__row {
    display: flex;
    gap: 4rem;
    flex-direction: column-reverse;

    @media (min-width: $breakpoint_medium) {
      flex-direction: row;
    }
  }

  &__column {
    width: auto;
    @media (min-width: $breakpoint_medium) {
      width: 40%;
    }
  }
  &__inner {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title {
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: 600;
    color: #04134c;
    margin-bottom: 1rem;
    @media (min-width: $breakpoint-large) {
      margin-bottom: 2.4rem;
      font-size: 3.4rem;
    }
  }
  &__sub-container {
    margin-bottom: 0.5rem;
  }
  &__sub-title {
    background: var(--pickup2-gradient-2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__description {
    margin-bottom: 3rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 28px;
    color: var(--text-grey-dark);
    margin-right: 0;
    @media (min-width: $breakpoint-verysmall) {
      margin-right: 17%;
    }
    @media (min-width: $breakpoint-medium) {
      margin-right: 0;
    }
  }
  &__btn-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30rem;

    @media (min-width: $breakpoint-large) {
      width: 40rem;
    }

    gap: 4rem;
    @media (min-width: $breakpoint_mobiletabs) {
      flex-direction: row-reverse;
    }

    @media (min-width: $breakpoint-medium) {
      flex-direction: row;
    }
  }
  &__image-container {
    width: auto;
    @media (min-width: $breakpoint_medium) {
      width: 60%;
    }
    &__inner {
      position: relative;
      width: 100%;
      @media (min-width: $breakpoint_medium) {
        width: 60rem;
      }
    }
  }
  &__image {
    overflow: hidden;
    margin-bottom: 0;
    position: relative;
    border-radius: 1.6rem;

    & img {
      width: 100%;
      max-height: 40rem;
      object-fit: cover;
    }
  }
}

.reverse-direction .section__row {
  @media (min-width: $breakpoint_medium) {
    flex-direction: row-reverse;
  }
}
</style>

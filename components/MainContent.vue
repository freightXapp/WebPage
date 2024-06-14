<template>
  <div>
    <div
      v-for="(section, index) in textContent"
      :key="section"
      :class="[`main__cont-${index}`, { 'main__cont-container': index !== 0 }]"
    >
      <test2 />

      <div class="main__cont-1-main">
        <div
          class="main__cont-1-text-content"
          :class="`main__cont-${index}-text-content`"
        >
          <div v-if="section.section" class="main__cont-1-section">
            <h3
              :class="`main__cont-${index}-section-title`"
              class="main__cont-1-section-title"
            >
              <div v-if="section.sectionImage">
                <component
                  :is="section.sectionImage"
                  :filled="''"
                  class="main__cont-1-section-image"
                />
              </div>
              {{ section.section }}
            </h3>
          </div>
          <h1 class="main__cont-1-head" :class="`main__cont-${index}-head`">
            {{ section.title }}
          </h1>
          <p class="main__cont-1-add" :class="`main__cont-${index}-add`">
            {{ section.description }}
          </p>
          <div
            class="main__cont-1-container"
            :class="`main__cont-${index}-container`"
          >
            <BaseButton
              :bg-color="section.buttonColor"
              :link-path="'https://one2hero.com/'"
              :svg-image-type="'arrow-right'"
              :button-text="section.buttonText"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import truckImage from "~/assets/BaseIcons/truck.png";
const textContent = [
  {
    buttonColor: "var(--pc2-orange-button)",
    buttonText: "Start for free",
    imagePath: truckImage,
    title: "Transport platform for freight exchange",
    description:
      "Enhances transport logistics by offering better workforce management, reducing empty kilometers, and increasing payment security.",
  },
];
</script>

<style scoped lang="scss">
.video-container {
  position: relative;
}

video {
  height: auto;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: auto;
  z-index: 0;
  width: 100%;
}

.main {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: $breakpoint-maxsize;
  margin: 0 auto;
  @media (min-width: $breakpoint-small) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $breakpoint_large) {
    grid-template-columns: repeat(3, 1fr);
  }
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__loop-container {
    background: white;
    border-radius: 2rem;
    margin: 2rem;
    &:hover {
      filter: drop-shadow(2px 2px 2px var(--main-orange));
    }
    @media (min-width: $breakpoint_large) {
      &:nth-child(4) {
        grid-column: 1 / 3;
      }
      &:nth-child(5) {
        grid-column: 3 / 4;
      }
    }
  }
  &__cont-title {
    margin-top: 3rem;
  }
  &__content-title {
    font-size: 5rem;
    color: var(--main-blue);
    justify-content: center;
    display: flex;
    margin-top: 3rem;
    position: relative;
    text-align: center;

    &::after {
      content: "";
      position: absolute;
      bottom: 1.1rem;
      height: 0.15em;
      background-image: var(--pc2-orange-button);
      background-repeat: no-repeat;
      left: 50%;
      right: 50%;
      clip-path: ellipse();
      transform: translate(-50%, -50%);
      z-index: -1;
      width: 40rem;
    }
  }
  &__content-addition {
    display: flex;
    justify-content: center;
    margin: 1rem 1rem 2rem 1rem;
    text-align: center;
  }
}
.main__cont-1 {
  position: relative;
  &-main {
    border-radius: 1rem;
    background: white;
    margin: 1rem;
    padding: 3.3rem 0px;
    overflow: hidden;
    @media (min-width: $breakpoint_small) {
      overflow: initial;
    }
  }

  &-head {
    font-size: $font-medium-large;
    font-weight: 700;
    color: var(--main-blue);
    line-height: 3.6rem;
    text-align: left;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  &-add {
    font-weight: 300;
    font-size: $font-almost-large;
    text-align: center;
    margin: 2rem 1rem 0 2rem;
    text-wrap: balance;
    color: var(--black);
    text-align: left;
  }
  &-count {
    display: inline-block;
    font-size: 4rem;
    margin-inline-end: 15px;
    font-weight: 700;
    color: var(--main-orange);
  }
  &-container {
    margin: 5rem 0 3rem;
    display: flex;
    margin-left: 2rem;
  }

  &-img {
    overflow: hidden;
    border-radius: 2rem;
    height: auto;
    max-width: 50rem;
    margin: 9rem auto;
    display: flex;
    justify-content: center;
  }

  &-section {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
    @media (min-width: $breakpoint_small) {
      margin-bottom: 2.5rem;
    }

    &-image {
      width: 3rem;
      height: 3rem;
      margin-left: 2rem;
    }

    &-title {
      background: var(--pickup2-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 2rem;
      font-weight: 500;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
}

video {
  width: 100%;
}
.main__cont-0 {
  position: relative;
  height: 100%;
  width: 100%;

  @media (min-width: $breakpoint-small) {
  }
  .main__cont-1-main {
    background-color: transparent !important;
    // max-width: $breakpoint-maxsize;
    margin: 0 auto;
    z-index: 1;
    top: 16%;
    bottom: 50%;
    position: absolute;
    transform: translate(10%, 0);
  }
  &-text-content {
    @include animate-move("left-to-right", 0.5s);

    top: 3rem;
  }
  :deep(.button) {
    height: 4.6rem;
    font-size: 1.8rem;
  }
  &-head {
    // margin-top: 10rem;
    z-index: 3;

    color: white;
    font-size: 3rem;
    text-align: left;
    margin-left: 2rem;
    text-wrap: balance;
    width: 95%;
    margin: 2rem;
    font-size: 3rem;
    line-height: 4rem;

    @media (min-width: $breakpoint_mobiletabs) {
      font-size: 5.4rem;
      line-height: 6.4rem;
    }

    @media (min-width: $breakpoint_small) {
      line-height: 7rem;
      font-size: 6rem;
      width: 60%;
    }
  }
  &-add {
    color: white;
    text-align: left;
    margin-top: 1rem;
    font-size: 1.6rem;
    margin-left: 2rem;
    z-index: 3;
    max-width: 100%;
    text-shadow: 2px 2px 4px black;
    @media (min-width: $breakpoint_mobiletabs) {
      font-size: 1.7;
    }
    @media (min-width: $breakpoint_small) {
      max-width: 35vw;
    }
  }
  &-container {
    z-index: 3;
    @include animate-move("left-to-right", 0.5s);
  }
  &-img {
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
    top: -25rem;
    @include animate-move("right-to-left", 1s);

    @media (min-width: $breakpoint-small) {
      top: 0rem;
      transform: translate(26%, -20%);
      animation: move-right-to-left-25 1s;
    }

    &-container {
      filter: drop-shadow(20px 20px var(--main-orange));
      @media (min-width: $breakpoint-small) {
        position: absolute;
        left: 0;
        right: -23rem;
        top: 4rem;
      }
      @media (min-width: $breakpoint_medium) {
        top: -5rem;
      }
    }
  }
}

@keyframes move-right-to-left-25 {
  0% {
    transform: translate(26%, 100%);
  }
  100% {
    transform: translate(26%, -20%);
  }
}
</style>

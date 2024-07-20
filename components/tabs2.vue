<template>
  <div class="container">
    <h1 class="container__title">More Services by Pickup2</h1>
    <div class="swiper-container" />
    <Swiper
      class="swiper-slider"
      :modules="[Autoplay, Pagination]"
      :pagination="pagination"
      :slides-per-view="1"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="(tab, index) in tabs" :key="tab.id">
        <div class="content" :class="{ 'content--reverse': index % 2 !== 0 }">
          <div class="content__left">
            <img :src="tab.image" alt="" class="content__image" />
          </div>
          <div class="content__text" v-html="tab.content" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Autoplay, Pagination } from "swiper/modules";
import services1Img from "~/assets/BaseIcons/services1.png";
import services2Img from "~/assets/BaseIcons/services2.png";
import services3Img from "~/assets/BaseIcons/services3.png";
import services4Img from "~/assets/BaseIcons/services4.png";

const tabs = [
  {
    id: "boosting",
    name: "Boosting",
    icon: "../img/boosting.svg",
    content: `
      The urgency of an order is not to be ignored? Or do you intend to pay special attention to your case?<br><br>
      The sponsored ad is responding to help. An efficient and cost-effective way to keep your workflow in shape. Don't let a single urgency slow down the entire business flow.`,
    image: services1Img,
  },
  {
    id: "filter",
    name: "Filter",
    icon: "../img/filter.svg",
    content: `
      Do you have preferences for what kind of ads should be displayed on your desktop?<br><br>
      Take advantage of the enriched features for customized search. Turn your working day into a pleasant pleasure. PicкUp2's lightweight interface allows you to take full advantage of digitized tools.`,
    image: services3Img,
  },
  {
    id: "rating",
    name: "Rating",
    icon: "../img/rating.svg",
    content: `
    Don't let your past good performance be forgotten. <br><br>
      Chronology. Payments. Documentation. How nice it would be if all this was transparent, wouldn't it?<br><br>
      Valuable partnerships are built with hard work and constant communication. We at the PickUp2 know this. To this purpose, we have developed our rating system into a more productive tool.<br><br>
      Allow us to transfer your ratings from other sources and implement them in your profile.`,
    image: services2Img,
  },
  {
    id: "rewards",
    name: "Rewards",
    icon: "../img/rewards.svg",
    content: `
      The roads are full of fines and penalties. It is no different in the path of the entrepreneur.<br><br>
      A system works well both when there is a regulation and when there is a reward mechanism. We aim to provide the latter. Achieve certain steps and get your financial relief in the PickUp2 system.`,
    image: services4Img,
  },
];

const pagination = ref({
  clickable: true,
  bulletClass: "bullets",
  el: ".swiper-container",
  bulletActiveClass: "bullet-active",
  renderBullet: (index, className) =>
    `<span class="${className}">
        <img src=${tabs[index].icon} class="icons" />
        <span class="icon-title"> ${tabs[index].name}</span>
     </span>`,
});
</script>

<style scoped lang="scss">
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  position: relative;

  &__title {
    font-size: 3.6rem;
    background: var(--pickup2-gradient-2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.content {
  display: flex;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
  transition: all 0.3s ease;

  &--reverse {
    flex-direction: row-reverse;
  }

  &__left {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  &__text {
    width: 40%;
    font-family: "NatoThaiLooped", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: var(--black);
    align-items: center;
    justify-content: center;
    text-align: left;
  }

  &__image {
    width: 100%;
    padding: 7rem;
    border-radius: 2rem;
  }
}

@media (max-width: $breakpoint-medium-large) {
  .content {
    flex-direction: column;
    &__image {
      max-width: 100%;
      margin: 0 auto;
    }

    &__text {
      margin: 0 auto;
      font-size: 2.3rem;
    }
  }
}

@media (max-width: $breakpoint_small) {
  .content {
    flex-direction: column;
    margin-top: 4rem;

    &__image {
      max-width: 100%;
      width: 100%;
      padding: 0;
    }
    &__text {
      width: 100%;
      font-size: 1.6rem;
    }
  }

  :deep(.icon-title) {
    font-size: 1.3rem;
  }

  :deep(.icons) {
    width: 40px !important;
    height: 40px !important;
  }
}

:deep(.icons) {
  width: 50px;
  height: 50px;
}

:deep(.swiper-container) {
  display: flex;
  margin-top: 4rem;
}

:deep(.bullet-active) {
  position: relative;
  color: var(--main-blue);
}

:deep(.bullet-active)::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  transform: translateX(-50%);
  width: 30%;
  height: 2px;
  background-color: var(--main-orange);
}

:deep(.bullets) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  flex: 1;
}
</style>

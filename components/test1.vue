<template>
  <div class="container">
    <h1 class="container__title">More Services by Pickup2</h1>
    <Swiper
      class="swiper-slider"
      :modules="[Autoplay, Pagination]"
      :pagination="pagination"
      :slides-per-view="1"
      :autoplay="{
        delay: 5000,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="(tab, index) in tabs" :key="tab.id">
        <div class="content" :class="{ 'content--reverse': index % 2 !== 0 }">
          <div class="content__left">
            <div class="content__subtitle">
              <h3 class="subtitle">{{ tab.subtitle }}</h3>
            </div>
            <img :src="tab.image" alt="" class="content__image" />
          </div>
          <div class="content__text" v-html="tab.content"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
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
    content:
      "The urgency of an order is not to be ignored?<br><br> Or do you intend to pay special attention to your case? The sponsored ad is responding to help. An efficient and cost-effective way to keep your workflow in shape. Don't let a single urgency slow down the entire business flow.",
    image: services1Img,
  },
  {
    id: "filter",
    name: "Filter",
    icon: "../img/filter.svg",
    content:
      "Do you have preferences for what kind of ads should be displayed on your desktop?<br><br> Take advantage of the enriched features for customized search. Turn your working day into a pleasant pleasure. PicкUp2's lightweight interface allows you to take full advantage of digitized tools.",
    image: services2Img,
  },
  {
    id: "rating",
    name: "Rating",
    icon: "../img/rating.svg",
    content:
      "Chronology. Payments. Documentation. How nice it would be if all this was transparent, wouldn't it?<br><br> Valuable partnerships are built with hard work and constant communication. We at the PickUp2 know this. To this purpose, we have developed our rating system into a more productive tool.<br><br> Allow us to transfer your ratings from other sources and implement them in your profile.",
    subtitle: "Don't let your past good performance be forgotten.",
    image: services3Img,
  },
  {
    id: "rewards",
    name: "Rewards",
    icon: "../img/rewards.svg",
    content:
      "The roads are full of fines and penalties. It is no different in the path of the entrepreneur.<br><br> A system works well both when there is a regulation and when there is a reward mechanism. We aim to provide the latter. Achieve certain steps and get your financial relief in the PickUp2 system.",
    image: services4Img,
  },
];

const pagination = ref({
  clickable: true,
  bulletClass: "bullets",
  horizontalClass: "swiper-container",
  bulletActiveClass: "bullet-active",
  renderBullet: (index, className) =>
    `<span class="${className}">
        <img src=${tabs[index].icon} class="icons" />
        <span class="icon-title"> ${tabs[index].name}</span></span>
        `,
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  align-items: center;

  &__title {
    text-align: center;
    font-size: 2.6rem;
    background: var(--pickup2-gradient-2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: $breakpoint-large) {
      font-size: 3.6rem;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 200px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  min-height: 450px;
  transition: all 0.3s ease;
  padding: 0 20px;

  &--reverse {
    flex-direction: row-reverse;
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }

  &__text {
    flex: 1;
    font-size: 2rem;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 20px;
  }

  &__image {
    flex: 1;
    max-height: 40rem;
    width: 80%;
    height: 100%;
    border-radius: 2rem;
    display: block;
    margin-right: 200px;
  }
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;

    &--reverse {
      flex-direction: column;
    }

    &__image {
      max-width: 50%;
      height: auto;
      margin: 0 auto;
    }

    &__text {
      margin: 0 auto;
    }
  }

  :deep(.swiper-container) {
    bottom: 80% !important;
  }
}

@media (max-width: 480px) {
  .content {
    width: 100%;

    &__image {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }

    &__text {
      margin: 0 auto;
    }
  }

  .swiper-slider {
    bottom: 20px;
  }

  :deep(.bullets) {
    padding: 5px !important;
    font-size: 10px !important;
  }

  :deep(.icons) {
    margin: 0 !important;
    width: 55px !important;
    height: 55px !important;
  }
}

:deep(.icons) {
  width: 80px;
  height: 80px;
}

:deep(.swiper-container) {
  width: 1600px;
  bottom: 70%;
  display: flex !important;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  width: 100%;
  padding: 0 10px;
}

:deep(.bullet-active) {
  color: var(--main-blue) !important;
  border-bottom: 3px solid var(--main-blue) !important;
}

:deep(.bullets) {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  padding: 10px 20px !important;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 14px !important;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
  flex: 1;
}

:deep(.bullets span) {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}
</style>

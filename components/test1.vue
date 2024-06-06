<template>
  <div class="container">
    <swiper
      :slides-per-view="isMobile ? 4 : tabs.length"
      @slideChange="onSlideChange"
      class="tabs"
      ref="swiperRef"
    >
      <swiper-slide
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        <div class="tab-content">
          <div class="icon-container">
            <component :is="tab.icon" :filled="''" class="icons" />
          </div>
          <span>{{ tab.name }}</span>
        </div>
        <div v-if="activeTab === tab.id" class="content">
          <p>{{ tab.content }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

import rewardsSvg from "~/assets/BaseIcons/rewards.svg";
import boostingSvg from "~/assets/BaseIcons/boosting.svg";
import filterSvg from "~/assets/BaseIcons/filter.svg";
import ratingSvg from "~/assets/BaseIcons/rating.svg";

const tabs = [
  {
    id: "boosting",
    name: "Boosting",
    icon: boostingSvg,
    content: "Boosting your case to get quick responses.",
  },
  {
    id: "filter",
    name: "Filter",
    icon: filterSvg,
    content: "Filter your searches to find exactly what you need.",
  },
  {
    id: "rating",
    name: "Rating Transfer",
    icon: ratingSvg,
    content: "Transfer ratings from one service to another.",
  },
  {
    id: "rewards",
    name: "Rewards",
    icon: rewardsSvg,
    content: "Earn rewards through your engagement.",
  },
];

const activeTab = ref(tabs[0].id);
const activeContent = ref(tabs[0].content);
const isMobile = ref(false);

function changeTab(tabId) {
  const tab = tabs.find((tab) => tab.id === tabId);
  activeTab.value = tab.id;
  activeContent.value = tab.content;
}

function onSlideChange(swiper) {
  const currentIndex = swiper.realIndex;
  const tab = tabs[currentIndex];
  activeTab.value = tab.id;
  activeContent.value = tab.content;
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
});
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.tabs {
  margin-bottom: 20px;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;

  &.active {
    color: blue;
    border-bottom: 3px solid blue;
  }
}

.tab-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-container {
  margin-bottom: 5px;
}

.icons {
  width: 40px;
  height: 40px;
}

span {
  margin-top: 5px;
  font-size: 12px;
}

.content {
  width: 100%;
  text-align: center;
  padding-top: 20px;
}

.content p {
  font-size: 14px;
  color: #333;
}
</style>

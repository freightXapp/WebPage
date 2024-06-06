<template>
  <div
    class="container"
    @mouseenter="stopAutoSwitch"
    @mouseleave="startAutoSwitch"
  >
    <h1 class="container__title">More Servives by Pickup2</h1>
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ tab: true, active: activeTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        <div class="icon-container">
          <component :is="tab.icon" :filled="''" class="icons" />
        </div>
        <span>{{ tab.name }}</span>
      </button>
    </div>
    <div class="content">
      <div class="left-content">
        <div v-if="activeTab === 'rating'" class="content__subtitle">
          <h3 class="subtitle">{{ subtitle }}</h3>
        </div>
        <img :src="activeImage" alt="" class="content__image" />
      </div>
      <div class="content__text" v-html="activeContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import rewardsSvg from "~/assets/BaseIcons/rewards.svg";
import boostingSvg from "~/assets/BaseIcons/boosting.svg";
import filterSvg from "~/assets/BaseIcons/filter.svg";
import ratingSvg from "~/assets/BaseIcons/rating.svg";
import services1Img from "~/assets/BaseIcons/services1.png";
import services2Img from "~/assets/BaseIcons/services2.png";
import services3Img from "~/assets/BaseIcons/services3.png";
import services4Img from "~/assets/BaseIcons/services4.png";

const tabs = [
  {
    id: "boosting",
    name: "Boosting",
    icon: boostingSvg,
    content:
      "The urgency of an order is not to be ignored?<br><br> Or do you intend to pay special attention to your case? The sponsored ad is responding to help. An efficient and cost-effective way to keep your workflow in shape. Don't let a single urgency slow down the entire business flow.",
    image: services1Img,
  },
  {
    id: "filter",
    name: "Filter",
    icon: filterSvg,
    content:
      "Do you have preferences for what kind of ads should be displayed on your desktop?<br><br> Take advantage of the enriched features for customized search. Turn your working day into a pleasant pleasure. PicкUp2's lightweight interface allows you to take full advantage of digitized tools.",
    image: services2Img,
  },
  {
    id: "rating",
    name: "Rating Transfer",
    icon: ratingSvg,
    content:
      "Chronology. Payments. Documentation. How nice it would be if all this was transparent, wouldn't it?<br><br> Valuable partnerships are built with hard work and constant communication. We at the PickUp2 know this. To this purpose, we have developed our rating system into a more productive tool.<br><br> Allow us to transfer your ratings from other sources and implement them in your profile.",
    subtitle: "Don't let your past good performance be forgotten.",
    image: services3Img,
  },
  {
    id: "rewards",
    name: "Rewards",
    icon: rewardsSvg,
    content:
      "The roads are full of fines and penalties. It is no different in the path of the entrepreneur.<br><br> A system works well both when there is a regulation and when there is a reward mechanism. We aim to provide the latter. Achieve certain steps and get your financial relief in the PickUp2 system.",
    image: services4Img,
  },
];

const activeTab = ref(tabs[0].id);
const activeContent = ref(tabs[0].content);
const activeImage = ref(tabs[0].image);
const subtitle = ref(tabs.find((tab) => tab.id === "rating").subtitle);
let intervalId;

function changeTab(tabId) {
  const tab = tabs.find((tab) => tab.id === tabId);
  activeTab.value = tab.id;
  activeContent.value = tab.content;
  activeImage.value = tab.image;
  subtitle.value = tab.subtitle || "";
}

function setNextTab() {
  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab.value);
  const nextIndex = (currentIndex + 1) % tabs.length;
  changeTab(tabs[nextIndex].id);
}

function startAutoSwitch() {
  intervalId = setInterval(setNextTab, 2000);
}

function stopAutoSwitch() {
  clearInterval(intervalId);
}

onMounted(() => {
  startAutoSwitch();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: $breakpoint-maxsize;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;

  &__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #1b358f;
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  width: 100%;

  .left-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .subtitle {
    font-size: 5rem;
  }
  &__text {
    flex: 1;
    font-size: 3rem;
    color: #333;
  }

  &__image {
    flex: 1;
    max-width: 600px;
    max-height: 450px;
    width: auto;
    height: auto;
    border-radius: 2rem;
    display: block;
    margin: 0 auto;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
  width: 20%;

  &.active {
    color: blue;
    border-bottom: 3px solid blue;
  }
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
  text-align: center;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column-reverse;

    &__image {
      max-width: 50%;
      margin: 0 auto;
      height: 200px;
    }
  }

  .tab {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
}
</style>

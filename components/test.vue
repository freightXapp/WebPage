<template>
  <div
    class="container"
    @mouseenter="stopAutoSwitch"
    @mouseleave="startAutoSwitch"
  >
    <h1 class="container__title">More Services by Pickup2</h1>
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ tab: true, active: activeTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        <div class="icon-container">
          <component :is="tab.icon" :filled="true" class="icons" />
        </div>
        <span>{{ tab.name }}</span>
      </button>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div
        class="content"
        :key="activeTab"
        :class="{
          'reverse-layout': isEven(
            tabs.findIndex((tab) => tab.id === activeTab)
          ),
        }"
      >
        <div class="content__left">
          <div v-if="activeTab === 'rating'" class="content__subtitle">
            <h3 class="subtitle">{{ subtitle }}</h3>
          </div>
          <img :src="activeImage" alt="" class="content__image" />
        </div>
        <div class="content__text" v-html="activeContent"></div>
      </div>
    </transition>
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
const subtitle = ref(tabs.find((tab) => tab.id === "rating").subtitle || "");
let intervalId = null;

function isEven(index) {
  return index % 2 === 0;
}

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
  if (!intervalId) {
    intervalId = setInterval(setNextTab, 4000);
  }
}

function stopAutoSwitch() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(startAutoSwitch);
onUnmounted(() => clearInterval(intervalId));
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #1b358f;
  }
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  width: 100%;
  gap: 20px;
  overflow-x: auto;
  padding: 0 10px;
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
  flex: 1;

  &.active {
    color: blue;
    border-bottom: 3px solid blue;
  }
}

.icon-container {
  margin-bottom: 5px;
}

.icons {
  width: 80px;
  height: 60px;
}

span {
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  min-height: 450px;
  transition: all 0.3s ease;
  padding: 0 20px;

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
    width: 100%;
    max-height: 40rem;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    display: block;
    margin-right: 20px;
  }

  &.reverse-layout {
    flex-direction: row-reverse;

    &__text {
      margin-left: 0;
      margin-right: 20px;
    }

    &__image {
      margin-right: 0;
      margin-left: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .content {
    flex-direction: column-reverse;
    width: 90%;
    min-height: auto;

    &__image {
      max-width: 70%;
      height: auto;
      margin: 0 auto;
    }

    &__text {
      margin: 0 auto;
    }
  }

  .tab {
    padding: 5px 10px;
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;

    &__image {
      max-width: 50%;
      height: auto;
      margin: 0 auto;
    }

    &__text {
      margin: 0 auto;
    }
  }

  .tab {
    padding: 5px;
    font-size: 10px;
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

  .tab {
    padding: 5px;
    font-size: 10px;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

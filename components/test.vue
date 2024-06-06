<template>
  <div
    class="container"
    @mouseenter="stopAutoSwitch"
    @mouseleave="startAutoSwitch"
  >
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
      <p>{{ activeContent }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
let intervalId;

function changeTab(tabId) {
  const tab = tabs.find((tab) => tab.id === tabId);
  activeTab.value = tab.id;
  activeContent.value = tab.content;
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
  isMobile.value = window.innerWidth <= 768;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });

  startAutoSwitch();
});

onUnmounted(() => {
  clearInterval(intervalId);
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

.content {
  min-height: 100px;
  color: #333;
  font-size: 14px;
}

@media (max-width: 768px) {
  .tab {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .tab {
    width: 100%;
  }
}
</style>

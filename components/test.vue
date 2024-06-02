<template>
  <div class="container">
    <div class="tabs">
      <button 
        class="tab" 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="content">
      <p>{{ activeContent }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = [
  { id: 'boosting', name: 'Boosting' },
  { id: 'filter', name: 'Filter' },
  { id: 'rating', name: 'Rating Transfer' },
  { id: 'rewards', name: 'Rewards' }
];

const activeTab = ref(tabs[0].id);
const activeContent = ref('Select a service to see more details.');

function changeTab(tabId) {
  activeTab.value = tabId;
  switch (tabId) {
    case 'boosting':
      activeContent.value = 'Boosting your case to get quick responses.';
      break;
    case 'filter':
      activeContent.value = 'Filter your searches to find exactly what you need.';
      break;
    case 'rating':
      activeContent.value = 'Transfer ratings from one service to another.';
      break;
    case 'rewards':
      activeContent.value = 'Earn rewards through your engagement.';
      break;
    default:
      activeContent.value = 'Select a service to see more details.';
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}

.tab.active {
  color: blue;
  border-bottom: 3px solid blue;
}

.content {
  min-height: 100px;
  color: #333;
  font-size: 14px;
}
</style>

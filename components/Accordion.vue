<template>
  <div class="accordion">
    <h1>WHY Pickup2</h1>
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <div class="accordion-header" @click="toggle(index)">
        <h2>{{ item.title }}</h2>
        <span>{{ activeIndex === index ? "-" : "+" }}</span>
      </div>
      <div class="accordion-content" v-if="activeIndex === index">
        <div class="accordion-body">
          <img :src="item.image" :alt="item.title" />
          <div v-html="item.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.accordion {
  border: 1px solid #ddd;
}
.accordion-item {
  border-bottom: 1px solid #ddd;
  width: 50%;
}
.accordion-header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  cursor: pointer;
}
.accordion-content {
  padding: 1em;
}
.accordion-body {
  display: flex;
  align-items: center;
}
.accordion-body img {
  width: 300px;
  height: auto;
  margin-right: 1em;
}
</style>

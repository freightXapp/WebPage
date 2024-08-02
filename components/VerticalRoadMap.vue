<template>
  <div class="roadmap">
    <div class="background-line"></div>
    <div v-for="(point, index) in points" :key="index" class="roadmap-point">
      <div class="roadmap-content">
        <div class="point-circle"></div>
        <div class="point-text">{{ point }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  points: string[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.roadmap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin: 20px 0;
}

.background-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #e0e1ff;
  z-index: 0;
}

.roadmap-point {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.roadmap-line {
  width: 2px;
  background-color: transparent;
  height: 70px;
  position: absolute;
  left: 20px;
  top: -10px;
  transform: translateX(-50%);
  z-index: 1;
}

.roadmap-line.dashed {
  border-left: 2px dashed #e0e1ff;
}

.roadmap-content {
  display: flex;
  align-items: center;
  margin: 20px 0;
  position: relative;
}

.point-circle {
  width: 20px;
  height: 20px;
  background-color: #63b5f1;
  border-radius: 50%;
  border: 2px solid #e0e1ff;
  position: absolute;
  left: 10px;
  z-index: 2;
}

.point-text {
  margin-left: 40px;
  font-size: 1.6rem;
  font-weight: 300;
}
</style>

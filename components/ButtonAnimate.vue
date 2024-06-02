<template>
    <div class="button-container">
        <button class="button">{{ text }}</button>
    </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Our Services",
});
</script>


<style lang="scss" scoped>
.button-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.button {
  padding: 10px 20px;
  background-color: var(--main-orange);
  color: white;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.button::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-blue);
  z-index: -1;
  animation: slideOut 0.3s forwards;
}

.button-container:hover .button::before {
  animation: slideIn 0.3s forwards;
}

@keyframes slideIn {
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
}

@keyframes slideOut {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

</style>
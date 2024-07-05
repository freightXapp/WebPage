<script setup lang="ts">
import { ref } from 'vue';

const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  // Add more country codes as needed
];

const selectedCountryCode = ref(countryCodes[0].code);

const emit = defineEmits(['update:code']);

watch(selectedCountryCode, (newCode) => {
  emit('update:code', newCode);
});
</script>

<template>
  <select v-model="selectedCountryCode">
    <option v-for="country in countryCodes" :key="country.code" :value="country.code">
      {{ country.name }} ({{ country.code }})
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: 100%;
}
</style>

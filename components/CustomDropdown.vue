<template>
  <div ref="customSelect" class="custom-select" :class="{ 'custom-select--active': isDropdownOpen }">
    <button
      ref="selectBtn"
      class="custom-select__button"
      role="combobox"
      aria-labelledby="select button"
      aria-haspopup="listbox"
      :aria-expanded="isDropdownOpen"
      @click="toggleDropdown"
    >
      <span class="custom-select__value">{{ selectedCountryCode }}</span>
      <span class="custom-select__arrow" />
    </button>

    <ul v-show="isDropdownOpen" id="select-dropdown" ref="listContainer" class="custom-select__dropdown" role="listbox">
      <li
        v-for="(country, index) in euCountries"
        :key="country.code"
        ref="listItems"
        role="option"
        :class="{ 'custom-select__element--highlighted': highlightedIndex === index }"
        class="custom-select__element"
        @click="selectOption(country,index)"

      >
        <input
          :id="country.dialCode"
          type="radio"
          name="country-code"
          :checked="country.dialCode === selectedCountryCode"
          class="custom-select__input"
        >
        <label :for="country.dialCode" class="custom-select__label" >
            
          <i class="custom-select__icon" />{{ country.code }} ({{ country.dialCode }})
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { euCountries } from '~/data/euCountries';

export interface Country {
  name: string;
  dialCode: string;
  code: string;
  eu: string;
  icon?: string;
}
const listItems = ref<HTMLElement[]>();
const listContainer = ref<HTMLElement>();


const scrollPosition = (direction: number): void => {
	nextTick(() => {
		
		const items = listItems.value as HTMLElement[];
		highlightedIndex.value = Math.min(Math.max(0, highlightedIndex.value + direction), euCountries.length - 1);
		const top = items[highlightedIndex.value].offsetTop;
 
		listContainer.value?.scrollTo({ top, behavior: 'smooth' });
	});
};

const selectedCountryCode = ref(euCountries[0].dialCode);
const highlightedIndex = ref(0);
const emit = defineEmits(['update:code']);

watch(selectedCountryCode, (newCode) => {
  emit('update:code', newCode);
});

const customSelect = ref<HTMLElement | null>(null);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (country: Country, index: number) => {
  selectedCountryCode.value = country.dialCode;
  isDropdownOpen.value = false;
   highlightedIndex.value = index;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (['Escape', 'ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
    event.preventDefault();
  }

  switch (event.key) {
    case 'Escape':
      isDropdownOpen.value = false;
      break;
    case 'ArrowDown':
      if (!isDropdownOpen.value) {
        event.preventDefault();
        isDropdownOpen.value = true;
      } else {
            highlightedIndex.value = (highlightedIndex.value + 1) % euCountries.length;
              scrollPosition(0)



      }
      break;
    case 'ArrowUp':
      if (isDropdownOpen.value) {
        if(highlightedIndex.value > 0 ){
        highlightedIndex.value = (highlightedIndex.value - 1 + euCountries.length) % euCountries.length;
              scrollPosition(0)
        }

      }
      break;
    case 'Enter':
      if (isDropdownOpen.value && highlightedIndex.value >= 0) {
        selectOption(euCountries[highlightedIndex.value]);
      }
      break;
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);

  const handleClickOutside = (event: MouseEvent) => {
    event.preventDefault();
    if (customSelect.value && !customSelect.value.contains(event.target as Node)) {
      isDropdownOpen.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeydown);
  };
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 13rem;
  max-width: 100%;
  font-size: 1rem;
  color: #333;
  margin-top: 3rem;
  font-family: Arial, sans-serif;

  &__button {
    width: 100%;
    font-size: 1rem;
    background-color: #fff;
    padding: 0.675rem 1rem;
    border: 1px solid #caced1;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border-color 0.3s;

    &:hover,
    &:focus {
      border-color: #6366f1;
      outline: none;
    }

    &:active {
      border-color: #4f46e5;
    }
  }

  &__value {
    text-align: left;
    font-weight: 500;
  }

  &__arrow {
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.6rem solid #000;
    transition: transform 0.3s ease;
  }

  &__dropdown {
    position: absolute;
    list-style: none;
    width: 100%;
    box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border: 1px solid #caced1;
    border-radius: 0.375rem;
    max-height: 30rem;
    overflow-y: auto;
    transition: opacity 0.5s ease;
    z-index: 1;


    &.custom-select--active {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
    }
  }

  &__option {
    position: relative;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 1rem;

  }
  &__label {
    width: 100%;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.6rem;


  }
  &__element:hover{
      background-color: #bc3b3b;
  }
   &__element--highlighted {
      background-color: #bc3b3b;
    }

  &__input {
    position: absolute;
    left: 0;
    opacity: 0;
   

    &:focus ~ .custom-select__label {
      background-color: #dfdfdf;
    }
  }

  &__icon {
    font-size: 1.2rem;
    color: #4b5563;
  }

  &__dropdown::-webkit-scrollbar {
    width: 0.8rem;
  }

  &__dropdown::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2.5rem;
  }

  &__dropdown::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 2.5rem;

    &:hover {
      background: #a1a1aa;
    }
  }

  &--active &__arrow {
    transform: rotate(180deg);
  }
}

</style>

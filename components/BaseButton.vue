<template>
  <component
    :is="tag"
    v-if="type !== 'arrow'"
    class="button"
    :style="{ background: bgColor, padding: padding, margin: margin }"
    @click="$emit('BaseButton:click')"
  >
    <NuxtLink
      v-if="tag === 'a'"
      :to="linkPath"
      class="button"
    >
      {{ buttonText }}
      <arrow
        alt="Button Image"
        :class="svgImageType ? svgImageType : 'button-image'"
      />
    </NuxtLink>
    <svgImage
      v-else-if="svgImage"
      alt="Button Image"
      :class="svgImageType ? svgImageType : 'button-image'"
    />
    <span v-if="tag !== 'a'">{{ buttonText }}</span>
  </component>


  <button
    v-if="type === 'arrow'"
    class="button"
    :style="{ background: bgColor, padding: padding, margin: margin }"
  >
    {{ buttonText }}
    <svg
      class="arrow-icon"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="arrow-icon__tip"
        d="M8 15L14 8.5L8 2"
        stroke="currentColor"
        stroke-width="3"
      />
      <line
        class="arrow-icon__line"
        x1="13"
        y1="8.5"
        y2="8.5"
        stroke="currentColor"
        stroke-width="3"
      />
    </svg>
  </button>
</template>


<script setup lang="ts">
import arrow from '~/assets/BaseIcons/arrowRightStr.svg'

interface Props {
type?: string;
  tag?: string;
  bgColor?: string;
  padding?: string;
  margin?: string;
  buttonText?: string;
  svgImage?: string;
  linkPath?: string;
  svgImageType?: string;
}
withDefaults(defineProps<Props>(), {
  tag: 'button',
  bgColor: 'orange',
  padding: '1.4rem 2rem 1.4rem 1.3rem',
  margin: '4px 2px',
  buttonText: 'Button',
  svgImage: '',
  linkPath: '',
  svgImageType: '',
  type: 'arrow'
});
</script>

<style scoped lang="scss">
.arrow-icon{
        top: 0.3rem;
  }

.button {
  border-radius: $button-border-medium;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: $font-small;
  cursor: pointer;
  position: relative;
  font-weight: 700;
  transition: box-shadow 0.3s;
  gap: 0.5rem;
  

  &:hover, &:focus {
box-shadow: 5px 5px 5px var(--light-text);

    .arrow-icon__tip {
      transform: translateX(0px);
    }

    .arrow-icon__line {
      opacity: 1;
    }
  }

  &:focus {
    outline-offset: 4px;
  }
}

.arrow-icon__tip {
  transform: translateX(-3px);
  transition: transform 0.5s;
}

.arrow-icon__line {
  opacity: 0;
  transition: opacity 0.5s;
}

// .button {
//   border-radius: $button-border-medium;
//   color: white;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: $font-small;
//   cursor: pointer;
//   position: relative;
//   font-weight: 700;
//   &:hover, &:focus {
//     background-color: var(--buttonHoverColor);

//     :dee(.arrow-icon__tip) {
//       transform: translateX(0px);
//     }

//     :deep(.arrow-icon__line) {
//       opacity: 1;
//     }
//   }

//   &:focus {
//     outline-offset: 4px;
//   }
// }

// :deep(.arrow-icon__tip) {
//   transform: translateX(-3px);
//   transition: transform 150ms;
// }

// .arrow-icon__line {
//   opacity: 0;
//   transition: opacity 150ms;
// }

// .button-image {
//   position: absolute;
//   top: 50%;
//   left: 100%;
//   transform: translateY(-50%);
//   margin-right: 1rem;
//   font-size: 2.2rem;
// }

// .arrow-right {
//   position: absolute;
//   top: 50%;
//   left: 100%;
//   transform: translateY(-50%);
//   margin-right: 1rem;
//   font-size: 2.2rem;
// }
</style>

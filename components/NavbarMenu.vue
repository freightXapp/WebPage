<template>
  <ul class="header__nav-list" :class="{ 'header__nav-mobile': isToggle }">
    <li class="header__nav-item">
      <NuxtLink to="/Shippers" class="header__nav-link">
        <span
          class="header__nav-title"
          :class="[{ 'header__nav-title--white': isAbove }]"
          >Shippers</span
        >
      </NuxtLink>
      <div class="header__dropdown" />
    </li>
    <li class="header__nav-item">
      <NuxtLink to="/forwarders" class="header__nav-link">
        <span
          class="header__nav-title"
          :class="[{ 'header__nav-title--white': isAbove }]"
          >Forwarders</span
        >
      </NuxtLink>
    </li>
    <li class="header__nav-item">
      <NuxtLink href="/carriers" class="header__nav-link">
        <span
          class="header__nav-title"
          :class="[{ 'header__nav-title--white': isAbove }]"
          >Carriers</span
        >
      </NuxtLink>
    </li>
    <li class="header__nav-item">
      <NuxtLink to="/pricing" class="header__nav-link">
        <span
          class="header__nav-title"
          :class="[{ 'header__nav-title--white': isAbove }]"
          >Pricing</span
        >
      </NuxtLink>
    </li>
    <li class="header__nav-item">
      <NuxtLink href="#" class="header__nav-link">
        <span
          class="header__nav-title"
          :class="[{ 'header__nav-title--white': isAbove }]"
          >About us</span
        >
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  isToggle: boolean;
  isAbove?: boolean;
}

const props = withDefaults(defineProps<Props>(), {});
console.log(props.isAbove);
</script>

<style setup lang="scss">
.header {
  &__nav {
    &-link {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-list {
      top: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
    }
    &-item {
      width: 100%;
    }
    &-title {
      font-size: clamp(1.5rem, 50%, 1.7rem);
      font-weight: 500;
      position: relative;
      &--white {
        color: white;
      }
    }

    @media (min-width: $breakpoint-small) {
      &-list {
        top: 0;
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      &-item {
        width: auto;
        position: relative;
        margin-right: 2rem;

        &:hover {
          .header__dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }
      }
    }

    &-link {
      color: var(--white);
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
      position: relative;
      overflow: hidden;
      border: none;
      outline: none;

      &:hover {
        .header__dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        // left: 0;
        width: 8rem;
        height: 2px;
        background-color: var(--main-orange);
        transform: translateX(-30%);
        opacity: 0;
        transition: transform 0.3s ease-in-out;
      }

      &:hover {
        &::after {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    &-icon {
      left: 1rem;
    }

    &__dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: var(--white);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
        transform 0.3s ease-in-out;

      &-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      &-item {
        margin-bottom: 0.5rem;
      }

      &-link {
        color: var(--black);
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        position: relative;
        overflow: hidden;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--main-orange);
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }

        &:hover {
          &::after {
            transform: translateX(0);
          }
        }
      }

      &-icon {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>

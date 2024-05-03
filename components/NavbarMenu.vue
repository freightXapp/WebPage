<template>
  <ul class="header__nav-list" :class="{ 'header__nav-mobile': isToggle }">
    <li class="header__nav-item">
      <NuxtLink to="/" class="header__nav-link">
        <span class="header__nav-title">Shippers</span>
        <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
      </NuxtLink>
      <div class="header__dropdown">
        <!-- Add dropdown content for "About" -->
      </div>
    </li>
    <li class="header__nav-item">
      <a href="#" class="header__nav-link">
        <span class="header__nav-title">Forwarders</span>
        <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
      </a>
      <!-- <div class="header__dropdown"> -->
      <!-- Add dropdown content for "Services" -->
      <!-- </div> -->
    </li>
    <li class="header__nav-item">
      <a href="#" class="header__nav-link">
        <span class="header__nav-title">Carriers</span>
        <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
      </a>
      <!-- <div class="header__dropdown"> -->
      <!-- Add dropdown content for "Contact" -->
      <!-- </div> -->
    </li>
    <li class="header__nav-item">
      <a href="#" class="header__nav-link">
        <span class="header__nav-title">Price</span>
        <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
      </a>
      <!-- <div class="header__dropdown"> -->
      <!-- Add dropdown content for "Contact" -->
      <!-- </div> -->
    </li>
    <li class="header__nav-item">
      <a href="#" class="header__nav-link">
        <span class="header__nav-title">About us</span>
        <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
      </a>
      <!-- <div class="header__dropdown">
                            <ul class="header__dropdown-list">
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <span>Link 1</span>
                                    </a>
                                </li>
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <span>Link 2</span>
                                    </a>
                                </li>
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <span>Link 3</span>
                                    </a>
                                </li>
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <span>Link 4</span>
                                    </a>
                                </li>
                            </ul>
                        </div> -->
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  isToggle: boolean;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style setup lang="scss">
.header {
  &__nav {
    &-list {
      top: 10rem;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;

    }
    &-title{
      font-size: clamp(1.5rem, 50%, 1.7rem);
      font-weight: 500;
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
      color: #ffff;
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
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #007bff;
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
      left: 1rem;
    }

    &__dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

      &-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      &-item {
        margin-bottom: 0.5rem;
      }

      &-link {
        color: #333;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        position: relative;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #007bff;
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

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo-container">
        <NuxtLink to="/">
          <pickUp2 :filled="''" class="header__logo" />
        </NuxtLink>
      </div>
      <nav class="header__nav">
        <ClientOnly>
          <Teleport
            v-if="isMobile && isToggle"
            to="body"
            class="header__menu-mobile"
          >
            <BaseDialog ref="modal" clas="t">
              <template #modal-body>
                <closeBtn class="header__dialog-close" @click="hiddenModal" />
                <NavbarMenu :is-toggle="isToggle" />
              </template>
            </BaseDialog>
          </Teleport>
          <NavbarMenu
            v-if="!isMobile"
            class="header__menu-desktop"
            :is-toggle="false"
          />
        </ClientOnly>
      </nav>
      <div class="header__last-items">
        <div class="header__auth">
          <a href="#" class="header__auth-link">
            <User class="header__auth-icon" />
          </a>
        </div>
        <label
          for="side-navbar-toggle"
          class="header__hamburger-btn"
          @click="showModal"
        >
          <span
            :class="[`${isToggle ? 'header__hamburger-active' : ''}`]"
            class="header__hamburger-icon"
          />
        </label>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import pickUp2 from "~/assets/BaseIcons/pc2-dark.svg";
import closeBtn from "~/assets/BaseIcons/closeBold.svg";
import User from "~/assets/BaseIcons/user.svg";
import BaseDialog from "./BaseDialog.vue";

const isToggle = ref(false);
const modal = ref<typeof BaseDialog>();
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener("resize", handleViewportChange);
});

const hiddenModal = () => {
  setTimeout(() => {
    // needed for animation dialig
    isToggle.value = false;
  }, 200);
  modal.value?.closeModal();
  document.removeEventListener("keydown", handleEscape);
  document.removeEventListener("popstate", hiddenModal);
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    event.preventDefault();
    isToggle.value = false;
  }
};
const showModal = () => {
  isToggle.value = !isToggle.value;
  modal.value?.openModal(); // baseDialog
  document.addEventListener("keydown", handleEscape);
  window.addEventListener("popstate", hiddenModal);
};

function handleViewportChange() {
  isMobile.value = window.innerWidth < 768;
}
</script>

<style lang="scss" scoped>
.header__dialog-close {
  width: 3rem;
  height: 3rem;
  color: var(--white);
  float: right;
  top: 2.6rem;
  right: 1.8rem;
}

// desktop + hamburger menu
.header {
  padding: 1rem 0;
  &__container {
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 15rem;
    height: 5rem;
    margin-right: 50px;
  }

  &__hamburger-btn {
    display: flex;
    text-align: center;
    padding: 3rem 2rem 3rem 2rem;
    cursor: pointer;
    max-height: 6.2rem;
  }

  &__hamburger-icon {
    position: relative;
    color: var(--black);

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 0.2rem;
      background-color: var(--black);
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.15s ease;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__hamburger-active {
    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(135deg);
    }

    &::after {
      top: 0;
      transform: rotate(-135deg);
    }
  }
  @media (min-width: $breakpoint-small) {
    &__hamburger-btn {
      display: none;
    }

    &__hamburger-icon {
      display: none;
    }
  }
  &__last-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__auth {
    &-icon {
      height: 3rem;
      width: 3rem;
      color: var(--black);
    }
  }
}
</style>

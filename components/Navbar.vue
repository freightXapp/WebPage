<template>
  <header ref="header" class="header" :class="{ 'sticky-header': isHeaderBg }">
    <div class="header__container">
      <div class="header__logo-container">
        <NuxtLink to="/">
          <pickUp2White v-if="isHeaderBg" :filled="''" class="header__logo" />
          <pickUp2White v-else :filled="''" class="header__logo" />
        </NuxtLink>
      </div>
      <nav class="header__nav">
        <ClientOnly>
          <Teleport
            v-if="isMobile && isToggle"
            to="body"
            class="header__menu-mobile"
          >
            <BaseDialog ref="modal">
              <template #modal-body>
                <NuxtLink to="/" @click="hiddenModal">
                  <pickUp2White
                    :filled="''"
                    class="header__logo header__mobile"
                  />
                </NuxtLink>

                <closeBtn class="header__dialog-close" @click="hiddenModal" />
                <NavbarMenu :is-toggle="isToggle" @close-modal="hiddenModal" />
              </template>
            </BaseDialog>
          </Teleport>
          <NavbarMenu
            v-if="!isMobile"
            class="header__menu-desktop"
            :is-toggle="false"
            :is-above="!isHeaderBg"
          />
        </ClientOnly>
      </nav>
      <div class="header__last-items">
        <div class="header__auth">
          <ClientOnly>
            <Teleport
              v-if="isAuthModalOpen"
              to="body"
              class="header__menu-mobile"
            >
              <BaseDialog ref="authModal" class="dialog-register">
                <template #modal-body>
                  <NuxtLink to="/" @click="hiddenModal" />
                  <closeBtn class="header__dialog-close" @click="hiddenModal" />
                  <Register />
                </template>
              </BaseDialog>
            </Teleport>
          </ClientOnly>
          <User
            class="header__auth-icon"
            :class="[{ 'header__auth-icon--white': !isHeaderBg }]"
            @click="showAuthModal"
          />
        </div>
        <label
          for="side-navbar-toggle"
          class="header__hamburger-btn"
          @click="showModal"
        >
          <span
            :class="[
              {
                'header__hamburger-active': isToggle,
                'header__hamburger-icon--white': !isHeaderBg,
              },
            ]"
            class="header__hamburger-icon"
          />
        </label>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseDialog from "./BaseDialog.vue";
import pickUp2White from "~/assets/BaseIcons/pc2.svg";
import closeBtn from "~/assets/BaseIcons/closeBold.svg";
import User from "~/assets/BaseIcons/user.svg";

const isToggle = ref(false);
const modal = ref<typeof BaseDialog>();
const authModal = ref<typeof BaseDialog>();
const isMobile = ref(false);
const header = ref(null);
const isHeaderBg = ref(false);
let lastScrollPosition = 0;
const isAuthModalOpen = ref(false);

function handleScroll() {
  const threshold = 0;
  isHeaderBg.value = window.scrollY > threshold;
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition < lastScrollPosition || isHeaderBg) {
    header.value.style.top = "";
  } else {
    header.value.style.top = "-100%";
  }

  lastScrollPosition = currentScrollPosition;
}
onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener("resize", handleViewportChange);
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  header.value.style.top = "";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const hiddenModal = () => {
  setTimeout(() => {
    // needed for animation dialig
    isToggle.value = false;
    isAuthModalOpen.value = false;
  }, 200);

  authModal.value?.closeModal();
  modal.value?.closeModal();
  document.removeEventListener("keydown", handleEscape);
  document.removeEventListener("popstate", hiddenModal);
  document.body.style.overflow = "auto";
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    hiddenModal()
  }
};

const showAuthModal = () => {
    isAuthModalOpen.value = !isAuthModalOpen.value;
     if (isAuthModalOpen.value) {
    authModal.value?.openModal(); // baseDialog
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("popstate", hiddenModal);
  }
};

const showModal = () => {
  isToggle.value = !isToggle.value;
  if (isToggle.value) {
    modal.value?.openModal(); // baseDialog
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("popstate", hiddenModal);
  }
};

function handleViewportChange() {
  isMobile.value = window.innerWidth < 768;
}
</script>

<style lang="scss" scoped>
.dialog-register {
  :deep(.dialog) {
    overflow: auto !important;
    backdrop-filter: blur(0.4rem);
    -webkit-backdrop-filter: blur(0.4rem);
    background-color: rgba(0, 0, 0, 0.7);
  }
}
.header__dialog-close {
  width: 3rem;
  height: 3rem;
  color: var(--white);
  float: right;
  top: 2.6rem;
  right: 1.8rem;
}
.sticky-header {
  background-color: var(--main-blue);
}
// desktop + hamburger menu
.header {
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  z-index: 4;
  height: 8rem;
  min-height: 8rem;

  &__mobile {
    margin-top: 1rem;
  }

  &__container {
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
  }

  &__logo {
    width: 15rem;
    height: 5rem;
    margin-right: 5rem;
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
    color: var(--white);
    &--white {
      &,
      &::before,
      &::after {
        background-color: var(--white) !important;
      }
    }

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 0.2rem;
      background-color: var(--white);
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
  &__auth-icon {
    height: 3rem;
    width: 3rem;
    color: var(--white);
    &--white {
      color: var(--white);
    }
  }
}
</style>

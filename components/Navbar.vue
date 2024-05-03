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
          <Teleport to="body" v-if="isMobile && isToggle" class="header__menu-mobile">
            <BaseDialog  clas="t" ref="modal">
              <template #modal-body>
                <closeBtn @click="hiddenModal" class="header__dialog-close"></closeBtn>
                <NavbarMenu  :is-toggle="isToggle"></NavbarMenu>
              </template>
            </BaseDialog>
          </Teleport>
          <NavbarMenu v-if="!isMobile" class="header__menu-desktop":is-toggle="false"></NavbarMenu>
        </ClientOnly>
      </nav>
      <label for="sidebar-toggle" @click="showModal" class="header__hamburger-btn">
        <span :class="[`${isToggle ? 'header__hamburger-active' : ''}`]" class="header__hamburger-icon"></span>
      </label>

      <div class="header__auth">
        <a href="#" class="header__auth-link">
          <!-- <NuxtIcon name="user" class="header__auth-icon" /> -->
          <span>Login</span>
        </a>
      </div>
    </div>
  </header>

   
</template>


  <script setup lang="ts">
    import pickUp2 from '~/assets/BaseIcons/pc2.svg';
    import closeBtn from '~/assets/BaseIcons/closeBold.svg';
    import BaseDialog from './BaseDialog.vue';

    const isToggle = ref(false);
    const modal = ref<typeof BaseDialog>();
    const isMobile = ref(false);

    onMounted(() => {
      isMobile.value = window.innerWidth < 768;
    window.addEventListener("resize", handleViewportChange);

    })

    const hiddenModal = () => {
      setTimeout(() =>{ // needed for animation dialig
        isToggle.value = false;
      }, 200)
      modal.value?.closeModal();
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('popstate', hiddenModal);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
      isToggle.value = false;
      }
    };
    const showModal = () => {
      isToggle.value = !isToggle.value;
        modal.value?.openModal(); // baseDialog
      document.addEventListener('keydown', handleEscape);
      window.addEventListener('popstate', hiddenModal)
    };

    function handleViewportChange(){
      isMobile.value = window.innerWidth < 768;
    }

  </script>

  <style lang="scss" scoped>
.header__dialog-close{
  width: 3rem;
  height: 3rem;
  color: white;
  float: right;
  top: 2.6rem;
  right: 1.8rem;
}

    // desktop + hamburger menu
    .header {
      background: var(--pickup2-gradien);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;

      &__container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__logo {
        width: 15rem;
        height: 5rem;
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
        color: #ffff;

        &,
        &::before,
        &::after {
          width: 3rem;
          height: 0.2rem;
          background-color: #ffff;
          display: inline-block;
        }

        &::before,
        &::after {
          content: '';
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

      &__auth {
        display: none;
      }

      @media (min-width: $breakpoint-small) {
        &__auth {
          display: flex;
          align-items: center;

          &-link {
            color: #333;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background-color 0.3s ease-in-out;

            &:hover {
              background-color: #f5f5f5;
            }
          }

          &-icon {
            margin-right: 0.5rem;
          }
        }
      }
    }
  </style>

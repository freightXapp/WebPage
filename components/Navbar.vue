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
            <BaseDialog  ref="modal">
              <NavbarMenu :is-toggle="isToggle"></NavbarMenu>
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
    import BaseDialog from './BaseDialog.vue';

    const isToggle = ref(false);
    const modal = ref<typeof BaseDialog>();
    const isMobile = ref(false);

    onMounted(() => {
      isMobile.value = window.innerWidth < 768;
    window.addEventListener("resize", handleViewportChange);

    })

    const hiddenModal = () => {
      isToggle.value = false;
      modal.value?.closeModal();
      /* eslint-disable no-use-before-define */
      document.removeEventListener('keydown', handleEscape);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        hiddenModal();
      }
    };
    const showModal = () => {
      console.log('yes');
      isToggle.value = !isToggle.value;
        modal.value?.openModal(); // baseDialog
      document.addEventListener('keydown', handleEscape);
    };

    function handleViewportChange(){
      isMobile.value = window.innerWidth < 768;
    }

  </script>

  <style lang="scss" scoped>
.header__nav-mobile{

}
  .header__menu-desktop{

    display: flex;
    }

  //   .dialog {
  //   border: none;
  //   height: 100vh;
  //   margin: 0;
  //   max-height: none;
  //   max-width: none;
  //   padding: 0;
  //   width: 100vw;
  //   background-color: rgba(0, 0, 0, 0.6);
  //   top: 0;
  //   left: 0;
  //   position: fixed;
  //   z-index: 1000;
  //   overflow: hidden;
  // }

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

        // min-width: 3.5rem;
        // min-height: 3.5rem;
        & svg,
        path {
          fill: none;
        }
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

      // &__nav {
      //   &-list {
      //     display: none;
      //   }

      //   @media (min-width: $breakpoint-small) {
      //     &-list {
      //       display: flex;
      //       flex-direction: row;
      //       list-style: none;
      //       margin: 0;
      //       padding: 0;
      //     }

      //     &-item {
      //       position: relative;
      //       margin-right: 2rem;

      //       &:hover {
      //         .header__dropdown {
      //           opacity: 1;
      //           visibility: visible;
      //           transform: translateY(0);
      //         }
      //       }
      //     }
      //   }

      //   &-link {
      //     color: #ffff;
      //     text-decoration: none;
      //     display: flex;
      //     align-items: center;
      //     padding: 0.5rem 0;
      //     position: relative;
      //     overflow: hidden;

      //     &:hover {
      //       .header__dropdown {
      //         opacity: 1;
      //         visibility: visible;
      //         transform: translateY(0);
      //       }
      //     }

      //     &::after {
      //       content: '';
      //       position: absolute;
      //       bottom: 0;
      //       left: 0;
      //       width: 100%;
      //       height: 2px;
      //       background-color: #007bff;
      //       transform: translateX(-100%);
      //       transition: transform 0.3s ease-in-out;
      //     }

      //     &:hover {
      //       &::after {
      //         transform: translateX(0);
      //       }
      //     }
      //   }

      //   &-icon {
      //     margin-left: 0.5rem;
      //   }

      //   &__dropdown {
      //     position: absolute;
      //     top: 100%;
      //     left: 0;
      //     background-color: #fff;
      //     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      //     padding: 1rem;
      //     min-width: 200px;
      //     opacity: 0;
      //     visibility: hidden;
      //     transform: translateY(20px);
      //     transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

      //     &-list {
      //       list-style: none;
      //       margin: 0;
      //       padding: 0;
      //     }

      //     &-item {
      //       margin-bottom: 0.5rem;
      //     }

      //     &-link {
      //       color: #333;
      //       text-decoration: none;
      //       display: flex;
      //       align-items: center;
      //       padding: 0.5rem;
      //       position: relative;
      //       overflow: hidden;

      //       &::after {
      //         content: '';
      //         position: absolute;
      //         bottom: 0;
      //         left: 0;
      //         width: 100%;
      //         height: 2px;
      //         background-color: #007bff;
      //         transform: translateX(-100%);
      //         transition: transform 0.3s ease-in-out;
      //       }

      //       &:hover {
      //         &::after {
      //           transform: translateX(0);
      //         }
      //       }
      //     }

      //     &-icon {
      //       margin-right: 0.5rem;
      //     }
      //   }
      // }

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

    // mobile content
    .header__nav-mobile {
      // display: block;
    }
  </style>

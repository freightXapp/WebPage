<template>
  <section class="main">
    <div class="main__container">
      <video
        class="main__video lazy w-100 mw-100 loaded"
        autoplay
        muted
        playsinline
      >
        <source src="../assets/videos/main.hevc.mp4" type="video/mp4" />
        <source src="../assets/videos/main.hevc.webm" type="video/webm" />
        Your browser does not support this video.
      </video>
      <div class="main__text-wrapper">
        <div class="main__text-container">
          <h1>Transport platform for freight exchange</h1>
          <p class="main__text-add">
            Enhances transport logistics by offering better workforce
            management, reducing empty kilometers, and increasing payment
            security.
          </p>
          <div class="main__button-container">
            <BaseButton
              :bg-color="'var(--pc2-orange-button)'"
              :button-text="'Start for free'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
:deep(.button::after){
    width: 3.9rem;
    height: 4.2rem;
    top: 0;
    border: 0.4rem solid white;
    right: -0.3rem;
}
:deep(.button){
    height: 4rem;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  &__text-add{
    @media(min-width: $breakpoint-small){
        max-width: 70%;
  margin: 0 auto;
    }
  }

  &__container {
    position: relative;
    width: 100%;
    max-width: 100vw;
    max-height: 100vh;
    background: linear-gradient(
      to bottom,
      rgba(0, 105, 180, 0.8) 0%,
      rgba(0, 105, 180, 0.6) 100%
    );
    margin-bottom: -1rem;
  }

  &__video {
    width: 100%;
    max-width: 100%;
    z-index: -1;
  }

  &__text-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 1rem;
   background: linear-gradient(
      to bottom,
      rgba(0, 105, 180, 0.8) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    top: -1rem;

    
  }
  &__container {
    text-align: center;

    h1 {
    margin-top: 1rem;
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    p {
        font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  &__button-container {
    justify-content: center;
    width: 100%;
    display: flex;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  @media (min-width: $breakpoint_small) {
    &__text-wrapper {
      width: 80%;
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: none;
    }

    &__text-container {
      h1 {
        font-size: 3rem; // medium screens
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: $breakpoint_medium) {
    &__text-wrapper {
      width: 70%;
    }

    &__text-container {
      h1 {
        font-size: 4rem; // larger screens
      }

      p {
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: $breakpoint_large) {
    &__container {
      max-height: 70vh;
    }
    &__text-container {
      h1 {
        font-size: 5rem; // large desktops
      }
    }
  }
}
</style>

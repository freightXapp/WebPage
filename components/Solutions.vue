<template>
  <section class="solutions">
    <h2 class="solutions__title">Your solutions</h2>
    <p class="solutions__subtitle">
      Technology that enhances your performance, security and business
    </p>
    <div class="solutions__grid">
      <div class="solutions__item">
        <MoneySVG :filled="''" alt="Freight income" class="solutions__icon" />
        <p class="solutions__text">Freight income</p>
      </div>
      <div class="solutions__item">
        <StafManageSVG
          :filled="''"
          alt="Staff manage"
          class="solutions__icon"
        />
        <p class="solutions__text">Staff manage</p>
      </div>
      <div class="solutions__item">
        <DealSVG :filled="''" alt="Deal exchange" class="solutions__icon" />
        <p class="solutions__text">Deal exchange</p>
      </div>
      <div class="solutions__item">
        <FuilSVG :filled="''" alt="Reduce km" class="solutions__icon" />
        <p class="solutions__text">Reduce km</p>
      </div>
      <div class="solutions__item">
        <TimeSVG :filled="''" alt="Time saving" class="solutions__icon" />
        <p class="solutions__text">Time saving</p>
      </div>
      <div class="solutions__item">
        <PaperSVG :filled="''" alt="Stocks control" class="solutions__icon" />
        <p class="solutions__text">Stocks control</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import FuilSVG from "~/assets/BaseIcons/fuil.svg";
import DealSVG from "~/assets/BaseIcons/handShakeDeal.svg";
import MoneySVG from "~/assets/BaseIcons/money.svg";
import PaperSVG from "~/assets/BaseIcons/paper.svg";
import TimeSVG from "~/assets/BaseIcons/time.svg";
import StafManageSVG from "~/assets/BaseIcons/stafmanage.svg";
</script>

<style lang="scss" scoped>
.solutions {
  text-align: center;
  padding: 2.3rem;

  &__title {
    font-size: 2.6rem;
    font-weight: bold;
    margin: 1.5rem 0;
    color: var(--dark-blue);

    @media (min-width: $breakpoint-large) {
      font-size: 3.6rem;
    }
  }

  &__subtitle {
    font-size: 1.6rem;
    color: var(--dark-blue);
    margin-bottom: 4rem;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem;

    @media (min-width: $breakpoint_small) {
      gap: 7rem;
    }

    margin-bottom: 3rem;

    @media (min-width: $breakpoint-medium) {
      gap: 0rem;
    }

    @media (min-width: $breakpoint-large) {
      gap: 5rem;
    }
  }

  &__icon {
    width: 4.5rem;
    height: 4.5rem;
    margin-bottom: 0.5rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;

    @media (min-width: $breakpoint-small) {
      width: 15rem;
    }
  }

  &__text {
    font-size: 1.5rem;
    color: var(--dark-blue);
  }
}
</style>

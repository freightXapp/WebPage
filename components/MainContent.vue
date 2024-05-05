<template>
  <h1 class="main__cont-1-head">Partners in optimized transport process</h1>
  <p class="main__cont-1-add">
    Enhances transport logistics by offering better workforce management, reducing empty kilometers, and increasing
    payment security.
  </p>
  <BaseButton :bg-color="'var(--pc2-orange-button)'" :svgImage="arrow" :linkPath="'https://one2hero.com/'"  :svgImageType="'arrow-right'" :button-text="'Start for free'" :tag="'a'"></BaseButton>
</template>

<script setup>
</script>

<style scoped lang="scss">
.main {
  &__cont-1-head {
    display: flex;
    justify-content: center;
    font-size: $font-medium-large;
    margin-top: 5rem;
    text-align: center;
    font-weight: 700;
    background: var(--pickup2-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 3.6rem;
  }
  &__cont-1-add {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: 300;
    font-size: $font-almost-large;
    text-align: center;
    margin: 4rem 1rem 0 1rem;
    text-wrap: balance;
    color: var(--black);
  }
}
</style>

<!-- border-radius: 8px; -->
<!-- background: var(--PickUp2-Orange-Button, linear-gradient(90deg, #FA902E 0%, #BF6816 100%)); -->
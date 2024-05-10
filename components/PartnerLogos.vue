<template>
  <section class="small-section">
    <div class="container">
      <div class="row">
        <div class="col">
          <LogoSlider />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.small-section {
  margin: 0 auto;
  width: 80%;
  padding: 60px 0;
  .container {
    padding: 0;
  }

  .row {
    margin: 0;
  }
}
@media (min-width: 1461px) {
  .container {
    max-width: 1400px;
  }
}
</style>

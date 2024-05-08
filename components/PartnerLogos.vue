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
  padding: 60px 0; // Adjust padding as necessary, possibly reducing it

  .container {
    padding: 0; // Minimize padding if it's not required
  }

  .row {
    margin: 0; // Adjust or remove margin
  }
}
@media (min-width: 1461px) {
  .container {
    max-width: 1400px;
  }
}
</style>

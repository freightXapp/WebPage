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
  width: $breakpoint-maxsize;
  padding: 60px 0;
  .container {
    padding: 0;
  }

  .row {
    margin: 0;
  }
  
  .container{
    margin-left: 2rem;
    @media(min-width: $breakpoint-maxsize){
        margin-left: 10rem;
    }
  }
}

</style>

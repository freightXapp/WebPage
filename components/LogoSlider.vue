<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :breakpoints="breakpoints"
    class="slide-1 brand-slider"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :loop="false"
  >
    <SwiperSlide v-for="img in brands" :key="img">
      <img :src="img" alt="image" class="img-fluid" />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
const brands = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/8.png",
];
const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 50,
    width: '320',
  },
  480: {
    width: null,
    slidesPerView: 3,
    spacebetween: 20,
  },
  768: {
    width: null,
    spacebetween: 20,
    slidesPerView: 4,
  },
  1199: {
    width: null,
    spacebetween: 50,
    slidesPerView: 5,
  },
};
</script>

<style lang="scss" scoped></style>

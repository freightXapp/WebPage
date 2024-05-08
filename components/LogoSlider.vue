<template>
  <swiper
    :breakpoints="breakpoints"
    :loop="true"
    class="slide-1 brand-slider"
    :slidesPerView="4"
    :spaceBetween="50"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    v-bind="setting"
  >
    <swiper-slide v-for="img in AllBrand" :key="img">
      <nuxt-link to="javascript:void(0)" class="logo-box">
        <img :src="img.src" alt="" class="img-fluid" />
      </nuxt-link>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"; // Ensure Swiper's CSS is imported
import { brand } from "../data/brand.json";
interface Brand {
  src: string;
}

const setting = {
  modules: [Autoplay],
};

console.log(brand);
const AllBrand: Brand[] = brand;
const breakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  1199: {
    slidesPerView: 5,
  },
};
</script>

<style lang="scss" scoped></style>

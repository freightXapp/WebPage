<template>
    <Swiper
:modules="[SwiperAutoplay, SwiperEffectCreative,
        SwiperPagination,
    SwiperNavigation]" :breakpoint="breakpoints" :loop="true" class="slide-1 brand-slider"
        :slides-per-view="4" :space-between="50" :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
        }">

        <SwiperSlide v-for="img in brands" :key="img">
                <img :src="img" alt="" class="img-fluid">
        </SwiperSlide>

    </Swiper>
</template>

<script lang="ts" setup>



const brands = [
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
    '/img/4.png',
    '/img/5.png',
    '/img/6.png',
    '/img/7.png',
    '/img/8.png'

]
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

<style lang="scss" scoped>
</style>

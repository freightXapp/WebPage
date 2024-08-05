<template>
  <MainVideoContent
    :data="[{ src: '../videos/shippers.webm', type: 'video/webm' }]"
    :title="'Trusted partner for efficient and safe cargo transportation.'"
    :description="''"
  />

  <div>
    <Accordion :items="accordionItems" />
  </div>
</template>

<script lang="ts" setup>
import IllustrationImg from "@/assets/BaseIcons/shippers3.png";
const accordionItems = [
  {
    title: "About Company",
    content:
      "We are a company providing a wide range of maintenance and many other services needed to make your life comfortable and happy. Our high-class experts fix any malfunction and install any equipment in your house.",
  },
  {
    title: "Our Mission",
    content: "<p>Our mission content goes here.</p>",
    image: IllustrationImg,
  },
  {
    title: "Our Vision",
    content: "<p>Our vision content goes here.</p>",
  },
  {
    title: "Our Goal",
    content: "<p>Our goal content goes here.</p>",
  },
];
</script>
<style scoped>
img {
  width: 100px;
  height: auto;
  display: block;
}
</style>

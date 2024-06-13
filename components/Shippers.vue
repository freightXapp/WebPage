<template>
  <MainVideoContent
    :data="[{ src: '../videos/shippers.webm', type: 'video/webm' }]"
    :title="'Trusted partner for efficient and safe cargo transportation.'"
    :description="''"
  />

  <InfoSection
    class="main-container"
    :title="infoData.title"
    :description="infoData.description"
    :illustration="infoData.illustration"
  />
</template>

<script lang="ts" setup>
import Illustration from "../assets/BaseIcons/forwardersIlustration.webp";
const infoData = {
  title: "At PickUp",
  description: [
    "we understand that successful freight forwarding requires not only precise planning and coordination, but also flexibility to deal with various challenges.",
    "Our platform offers integrated tools that make it easier for freight forwarders to manage orders, communicate with trustees and carriers, and optimize transport routes.",
  ],
  illustration: Illustration,
};
</script>

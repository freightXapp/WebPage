<template>
  <!-- VIDEO -->
  <MainVideoContent
    :data="[{ src: '../videos/forwarders.webm', type: 'video/webm' }]"
    :title="'Your reliable partner for professional logistics operations management'"
    :description="''"
  />
  <!--  INFO SECTION -->
  <InfoSection
    class="main-container"
    :title="infoData.title"
    :description="infoData.description"
    :illustration="infoData.illustration"
  />

  <!--  FEATURE -->
  <FeatureSection class="main-container" :feature-data="featureData" />

  <!-- PROMO -->
  <PromoSection
    class="main-container"
    :title="promoData.title"
    :image-alt="promoData.imageAlt"
    :description="promoData.description"
    :image="promoData.image"
    :rotate="true"
  />
  <PromoSection
    class="main-container"
    :title="promoData2.title"
    :image-alt="promoData.imageAlt"
    :description="promoData2.description"
    :image="promoData2.image"
    :reverse="true"
  />
  <SignUpSection />
</template>

<script lang="ts" setup>
import Illustration from "../assets/BaseIcons/forwardersIlustration.webp";
import boxSVG from "../assets/BaseIcons/box.svg";
import circleChartSVG from "../assets/BaseIcons/circleChart.svg";
import trackingSVG from "../assets/BaseIcons/tracking.svg";
import upperChartSVG from "../assets/BaseIcons/upperChart.svg";

const promoData = {
  image: "../img/dash.jpeg",
  imageAlt: "Logistics Dashboard",
  title:
    " Are you looking for effective solutions to manage your logisticsoperations?",
  description:
    " Get started with PickUp2 today and optimize your freight forwarding processes!",
};
const promoData2 = {
  image: "../img/forwardersIllustration.png",
  title:
    "Want to improve communication and collaboration in your logistics operations?",
  description:
    "Join PickUp2 and take advantage of our innovative freight forwarding tools!",
};
const featureData = [
  {
    icon: boxSVG,
    title: "Planning and coordination",
    description:
      "Organize and manage transport routes with precision and efficiency.",
  },
  {
    icon: circleChartSVG,
    title: "Communication and collaboration",
    description:
      "Maintain seamless communication between consignees and carriers for a smooth transportation process.",
  },
  {
    icon: trackingSVG,
    title: "Tracking and security",
    description:
      "Track your freight in real time and ensure its safety and timely delivery.",
  },
  {
    icon: upperChartSVG,
    title: "Cost optimization",
    description:
      "Optimize your costs by choosing the most efficient and economical transport solutions.",
  },
];

const infoData = {
  title: "At PickUp",
  description: [
    "we understand that successful freight forwarding requires not only precise planning and coordination, but also flexibility to deal with various challenges.",
    "Our platform offers integrated tools that make it easier for freight forwarders to manage orders, communicate with trustees and carriers, and optimize transport routes.",
  ],
  illustration: Illustration,
};
</script>

<style lang="scss" scoped>
:deep(.pickup-section__title) {
  &:after {
    content: "2";
    color: var(--main-orange);
    font-size: 6rem;
  }
}

:deep(.promo-image) {
  &:nth-child(0) {
    rotate: 20deg;
  }
}
.main-container {
  max-width: 1600px;
  margin: 0 auto;
}
</style>

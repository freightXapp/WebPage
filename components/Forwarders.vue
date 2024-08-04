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
    :buttonText="'Explore Docs'"
    :buttonColor="'var(--pc2-orange-button)'"
  />

  <InfoSection
    class="main-container"
    :roadmapPoints="infoData2.roadmapPoints"
    :illustration="infoData2.illustration"
    :reverse="true"
    :buttonText="'Create Account'"
    :buttonColor="'var(--pc2-blue)'"
  />
  <!--  FEATURE -->
  <SignUpSection
    class="signup"
    :title="'Key benefits'"
    :description="'Brokerage services and professionally developed negotiation skills are the engine of the economy. Keep your machine well oiled with the platforms digitized ways without losing the character of high trading practices.'"
    :bgColor="'linear-gradient(to bottom, rgba(27, 126, 218, 0.8) 16.36%, rgba(9, 70, 127, 0.7) 30.89%, rgba(3, 32, 66, 0.7) 46.83%, rgba(0, 0, 0, 0.7) 66.98%)'"
  />
  <FeatureSection class="main-container" :feature-data="featureData" />
  <!-- PROMO -->
  <PromoSection
    class="main-container"
    :title="promoData.title"
    :image-alt="promoData.imageAlt"
    :description="promoData.description"
    :image="promoData.image"
    :rotate="true"
    :background-color="''"
  />
  <PromoSection
    class="main-container"
    :title="promoData2.title"
    :image-alt="promoData.imageAlt"
    :description="promoData2.description"
    :image="promoData2.image"
    :reverse="true"
  />

  <SignUpSection
    :bg-color="'linear-gradient(to bottom,rgba(0, 105, 180, 0.8) 0%,rgba(255, 255, 255, 0.7) 100%)'"
    :title="'Ready to level up your earnings?'"
  />
</template>

<script lang="ts" setup>
import Illustration from "../assets/BaseIcons/forwardersIlustration.png";
import boxSVG from "../assets/BaseIcons/box.svg";
import circleChartSVG from "../assets/BaseIcons/circleChart.svg";
import trackingSVG from "../assets/BaseIcons/tracking.svg";
import upperChartSVG from "../assets/BaseIcons/upperChart.svg";
import IllustrationImg2 from "@/assets/BaseIcons/forwarders4.png";

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
  title: "VISION",
  description: [
    "we understand that successful freight forwarding requires not only precise planning and coordination, but also flexibility to deal with various challenges.",
    "Our platform offers integrated tools that make it easier for freight forwarders to manage orders, communicate with trustees and carriers, and optimize transport routes.",
  ],
  illustration: Illustration,
};

const infoData2 = {
  roadmapPoints: [
    "Create a free account by following the specific steps",
    "Prepare the necessary documents and post them in a secure repository specially created for the purpose",
    "Set up the database relevant to you in the intuitively designed desktop for your specific needs",
    "Start making deals and manage your business processes more easily",
  ],
  illustration: IllustrationImg2,
};
</script>

<style lang="scss" scoped>
:deep(.promo-image) {
  &:nth-child(0) {
    rotate: 20deg;
  }
}

.main-container {
  margin: 0 auto;
}
.background {
  padding-top: 100px !important;
  background-image: url("../assets//BaseIcons/service_bg.png") !important;
  background-position: -50% 0 !important;
  background-repeat: no-repeat !important;
}
</style>

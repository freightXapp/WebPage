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

  <FeatureSection class="main-container" :feature-data="featureData" />

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
import IllustrationImg from "@/assets/BaseIcons/shippers3.webp";

import boxSVG from "../assets/BaseIcons/time.svg";
import circleChartSVG from "../assets/BaseIcons/tracking2.svg";
import trackingSVG from "../assets/BaseIcons/flexibility.svg";
import upperChartSVG from "../assets/BaseIcons/communication1.svg";
const infoData = {
  title: "At PickUp",

  description: [
    "we understand that successfully transporting your freights is critical to your business. Our platform offers integrated solutions that simplify the entire process, from start to finish.",
    "We focus on efficiency, security and transparency to provide you with the best possible service.",
  ],
  illustration: IllustrationImg,
};

const featureData = [
  {
    icon: boxSVG,
    title: "Time and efficiency",
    description: "Find the fastest and most reliable routes for your freights",
  },
  {
    icon: circleChartSVG,
    title: "Security and tracking",
    description: "Track your shipments in real time for maximum security.",
  },
  {
    icon: trackingSVG,
    title: "Flexibility and adaptability",
    description:
      "Choose from a variety of carriers and services tailored to your needs.",
  },
  {
    icon: upperChartSVG,
    title: "Communication and collaboration",
    description:
      "Easy communication with all involved in the process for a smooth implementation",
  },
];

const promoData = {
  image: "../img/dash.jpeg",
  imageAlt: "Logistics Dashboard",
  title: " Need a fast and reliable solution for your freight?",
  description: " Join PickUp2 and start using our platform today!",
};

const promoData2 = {
  image: "../img/Shippers2.png",
  title: "Looking for a secure and efficient way to manage your freight?",
  description: "Get started now and take advantage of PickUp2!",
};
</script>

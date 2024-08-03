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
  <SignUpSection
    class="signup"
    :title="'Key benefits'"
    :description="'An organized process structure, a flexible hierarchy of access and analytics, and customized automation according to specific business needs represent the toolkit available on the platform.'"
    :bgColor="'linear-gradient(to bottom, rgba(27, 126, 218, 0.8) 16.36%, rgba(9, 70, 127, 0.7) 30.89%, rgba(3, 32, 66, 0.7) 46.83%, rgba(0, 0, 0, 0.7) 66.98%)'"
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
    :background-color="''"
  />

  <SignUpSection
    :bg-color="'linear-gradient(to bottom,rgba(0, 105, 180, 0.8) 0%,rgba(255, 255, 255, 0.7) 100%)'"
    :title="'Ready to level up your earnings?'"
  />
</template>

<script lang="ts" setup>
import IllustrationImg from "@/assets/BaseIcons/Shippers3.webp";
import IllustrationImg2 from "@/assets/BaseIcons/carriers2.png";
import boxSVG from "../assets/BaseIcons/time.svg";
import circleChartSVG from "../assets/BaseIcons/tracking2.svg";
import trackingSVG from "../assets/BaseIcons/flexibility.svg";
import upperChartSVG from "../assets/BaseIcons/communication1.svg";
const infoData = {
  title: "Vision",

  description: [
    "we understand that successfully transporting your freights is critical to your business. Our platform offers integrated solutions that simplify the entire process, from start to finish.",
    "We focus on efficiency, security and transparency to provide you with the best possible service.",
  ],
  illustration: IllustrationImg,
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

<style lang="scss" scoped>
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

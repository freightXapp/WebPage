<template>
  <!-- VIDEO -->
  <MainVideoContent
    :data="[{ src: '../videos/carriers.webm', type: 'video/webm' }]"
    :title="'Finding routes and receiving loads.'"
    :description="''"
  />
  <!-- INFO SECTION -->
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
    :roadmap-points="infoData2.roadmapPoints"
    :illustration="infoData2.illustration"
    :reverse="true"
    :buttonText="'Create Account'"
    :buttonColor="'var(--pc2-blue)'"
  />
  <SignUpSection
    class="signup"
    :title="'Key benefits'"
    :description="'Your business needs persistence, and your affiliate network needs value. Position your business in the most innovative place in a new era of technological progress.'"
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
import MainVideoContent from "@/components/MainVideoContent.vue";
import InfoSection from "@/components/InfoSection.vue";
import IllustrationImg from "@/assets/BaseIcons/carriers.png";
import IllustrationImg2 from "@/assets/BaseIcons/carriers2.png";
import boxSVG from "../assets/BaseIcons/time.svg";
import circleChartSVG from "../assets/BaseIcons/tracking2.svg";
import trackingSVG from "../assets/BaseIcons/flexibility.svg";
import upperChartSVG from "../assets/BaseIcons/communication1.svg";

const infoData = {
  title: "Vision",
  description: [
    "At PickUp2, we understand that successful entrepreneurship in this field requires more than just transportation – it requires precision, reliability, and excellent coordination.",
    "Our platform provides freight carriers with everything they need to manage transport operations, communicate with trustees, and optimize routes so you can fulfill every order with ease and security.",
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
    title: "Planning and organizing",
    description: "Optimize routes and schedules for maximum efficiency.",
  },
  {
    icon: circleChartSVG,
    title: "Real-time communication",
    description:
      "Stay in constant contact with trustees and drivers for hassle-free transportation.",
  },
  {
    icon: trackingSVG,
    title: "Tracking and security",
    description:
      "Track the movement of your freight in real time for maximum security.",
  },
  {
    icon: upperChartSVG,
    title: "Resource management",
    description:
      "Use your resources efficiently to reduce costs and delivery times.",
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

<style scoped>
.main-container {
  margin: 0 auto;
}

.info-section {
  margin-bottom: 40px;
}
.signup {
  top: 40px;
}
</style>

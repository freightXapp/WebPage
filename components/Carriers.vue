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
    :description="'An organized process structure, a flexible hierarchy of access and analytics, and customized automation according to specific business needs represent the toolkit available on the platform.'"
    :bgColor="'linear-gradient(to bottom, rgba(27, 126, 218, 0.8) 16.36%, rgba(9, 70, 127, 0.7) 30.89%, rgba(3, 32, 66, 0.7) 46.83%, rgba(0, 0, 0, 0.7) 66.98%)'"
  />

  <FeatureSection class="main-container" :feature-data="featureData" />
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
</script>

<style scoped>
.main-container {
  padding: 20px;
}

.info-section {
  margin-bottom: 40px;
}
.signup {
  top: 40px;
}
</style>

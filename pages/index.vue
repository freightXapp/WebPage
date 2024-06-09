<template>
  <div>
    <MainVideoContent />
    <Solutions/>
    <div class="services">
      <Services
        v-for="(item, index) in mainContentent"
        :key="item.title"
        :index="index"
        :text="item.description"
        :title="item.title"
        :image-svg="item.sectionImage"
        :image-title="item?.section"
        :image="item.image"
        :button-text="item.buttonText"
        :button-color="item.buttonColor"
      />
    </div>
    <PartnerLogos />

    <ServicesLong />
    <test />
    <SignUpSection />
    <Recomendation/>
  </div>
</template>
<script setup lang="ts">
import wareHouseSVG from "~/assets/BaseIcons/warehouse.svg";
import monitorSmartSVG from "~/assets/BaseIcons/monitor-smartphone.svg";
import carriersSVG from "~/assets/BaseIcons/carriers.svg";
import Carriers from "~/assets/BaseIcons/s5.jpg";
import Forwarders from "~/assets/BaseIcons/t3.jpeg";
import Shippers from "~/assets/BaseIcons/s6.jpg";

const mainContentent = [
  {
    buttonColor: "var(--dark-blue)",
    section: "Shippers",
    sectionImage: wareHouseSVG,
    buttonText: "Learn more",
    image: Shippers,

    title: "Find transport for your freights",
    description:
      "Boost your freight forwarding efficiency with our advanced system, quickly connecting you to available loads and providing transparent user ratings for smarter decisions.",
  },
  {
    buttonColor: "var(--dark-blue)",
    section: "Forwarders",
    sectionImage: monitorSmartSVG,
    image: Forwarders,
    buttonText: "Learn more",
    title: "Get loads faster, gain trust quicker",
    description:
      "Boost your freight forwarding efficiency with our advanced system, quickly connecting you to available loads and providing transparent user ratings for smarter decisions.",
  },
  {
    buttonColor: "var(--dark-blue)",
    section: "Carriers",
    image: Carriers,
    sectionImage: carriersSVG,
    buttonText: "Learn more",
    title: "Maximize loads, minimize runs, master your routes",
    description:
      "Empower your transport business with our logistics interface. It  connects you swiftly to loads, provides real-time tracking, and helps optimize your route efficiency to reduce empty kilometers.",
  },
];
</script>
<style lang="scss" scoped>
.services {
  background-color: white;
  padding: 2rem 0;
}
</style>

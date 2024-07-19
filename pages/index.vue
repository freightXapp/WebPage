<template>
  <div>
    <MainVideoContent />
    <Solutions />
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

    <ServicesLong />
    <Tabs />
    <SignUpSection />
    <Recomendation />
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
      "Ship with ease using our platform. Real-time tracking, freight management tools and secure backups.</br></br>Create an advertisement for your freight and receive offers from interested carriers and forwarders. Adjust your search according to your specific characteristics in the most granular detail.",
  },
  {
    buttonColor: "var(--dark-blue)",
    section: "Forwarders",
    sectionImage: monitorSmartSVG,
    image: Forwarders,
    buttonText: "Learn more",
    title: "Get loads faster, gain trust quicker",
    description:
      "Boost your freight forwarding efficiency with our advanced system, quickly connecting you to available loads and providing transparent user ratings for smarter decisions.</br></br>Navigate dynamically with the lightweight desktop interface designed specifically for the intensive daily life of shipping departments. Browse freight listings from shippers and submit quotes to carriers. Control the flow of information from one place.",
  },
  {
    buttonColor: "var(--dark-blue)",
    section: "Carriers",
    image: Carriers,
    sectionImage: carriersSVG,
    buttonText: "Learn more",
    title: "Maximize loads, minimize runs, master your routes",
    description:
      "Empower your transport business with our logistics interface. It  connects you swiftly to loads, provides real-time tracking, and helps optimize your route efficiency to reduce empty kilometers.</br></br>You can search for current loads widely throughout the Pickup2 marketplace. Furthermore, a feature is available to create your own ad for your upcoming tour. Let our network become your most useful tool",
  },
];
</script>
<style lang="scss" scoped>
.services {
  background-color: white;
  padding: 2rem 0;
}
</style>

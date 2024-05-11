<template>
    <div>
        <div v-for="(section, index) in textContent" :key="section" :class="`main__cont-${index}`">
            <div class="main__cont-1-main">
                <div class="main__cont-1-text-content">
                    <div v-if="section.section" class="main__cont-1-section">
                        <h3 :class="`main__cont-1-section-title`">
                            <div v-if="section.sectionImage">
                                <component :is="section.sectionImage" :filled="''" class="main__cont-1-section-image" />
                            </div>
                            {{section.section}}
                        </h3>
                    </div>
                    <h1 class="main__cont-1-head">
                        {{ section.title }}
                    </h1>
                    <p class="main__cont-1-add">
                        {{ section.description }}
                    </p>
                    <div class="main__cont-1-container">
                        <BaseButton :bg-color="section.buttonColor" :link-path="'https://one2hero.com/'"
                            :svg-image-type="'arrow-right'" :button-text="section.buttonText" />
                    </div>
                </div>
                <div v-if="section.imagePath">
                    <img :src="section.imagePath" class="main__cont-1-img" alt="logo">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import truckImage from "~/assets/BaseIcons/truck.png";
import defaultImage from "~/assets/BaseIcons/default.png";
import wareHouseSVG from "~/assets/BaseIcons/warehouse.svg";
import monitorSmartSVG from "~/assets/BaseIcons/monitor-smartphone.svg";
import carriersSVG from "~/assets/BaseIcons/carriers.svg";
import managersSVG from "~/assets/BaseIcons/managers.svg";
import trustSVG from "~/assets/BaseIcons/trust.svg";
const textContent = [
    {
        buttonColor: "var(--pc2-orange-button)",
        buttonText: "Start for free",
        imagePath: truckImage,
        title: "Transport platform for freight exchange",
        description:
            "Enhances transport logistics by offering better workforce management, reducing empty kilometers, and increasing payment security.",
    },
    {
        imagePath: defaultImage,
        title: "Your solutions",
        buttonText: "Learn more",
        description:
            "Technology that enhances your performance, security and business",
    },
    {
        section: "Shippers",
        sectionImage: wareHouseSVG,
        imagePath: defaultImage,
        buttonText: "Learn more",
        title: "Find transport for your freights",
        description:
            "Ship with ease using our platform. Real-time tracking, freight management tools and secure backups.",
    },
    {
        section: "Forwarders",
        sectionImage: monitorSmartSVG,
        imagePath: defaultImage,
        buttonText: "Learn more",
        title: "Get loads faster, gain trust quicker",
        description:
            "Boost your freight forwarding efficiency with our advanced system, quickly connecting you to available loads and providing transparent user ratings for smarter decisions.",
    },
    {
        section: "Carriers",
        sectionImage: carriersSVG,
        imagePath: defaultImage,
        buttonText: "Learn more",
        title: "Maximize loads, minimize runs, master your routes",
        description:
            "Empower your transport business with our logistics interface. It  connects you swiftly to loads, provides real-time tracking, and helps optimize your route efficiency to reduce empty kilometers.",
    },
    {
        section: "Managers",
        sectionImage: managersSVG,
        imagePath: defaultImage,
        buttonText: "Learn more",
        title: "Navigate, succeed, analyze, delegate, connect All in one place",
        description:
            "Enhance your managerial efficiency with our advanced analytics, delegated team control, and fast access to an extensive partner network, all designed to streamline your leadership.",
    },
    {
        section: "Trust and feedback",
        sectionImage: trustSVG,
        imagePath: defaultImage,
        buttonText: "Learn more",
        title: "Feedback at every level from companies to individuals",
        description:
            "Optimize your decision-making with our evaluation system, offering detailed ratings for companies and individual employees, enhancing your business insights.",
    },
];
</script>

<style scoped lang="scss">
.main__cont-1 {
    &-main {}

    &-head {
        display: flex;
        justify-content: center;
        font-size: $font-medium-large;
        margin-top: 3rem;
        text-align: center;
        font-weight: 700;
        color: var(--main-blue);
        line-height: 3.6rem;
        border-left: 0.3rem solid var(--main-blue);
    }

    &-add {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-weight: 300;
        font-size: $font-almost-large;
        text-align: center;
        margin: 4rem 1rem 0 1rem;
        text-wrap: balance;
        color: var(--black);
    }

    &-container {
        margin-top: 5rem;
        display: flex;
        justify-content: center;
    }

    &-img {
        overflow: hidden;
        border-radius: 2rem;
        width: 100%;
        height: auto;
        max-width: 70rem;
        margin: 4rem auto;
        display: flex;
        justify-content: center;
    }

    &-section {
        display: flex;
        justify-content: flex-start;

        &-image {
            width: 3rem;
            height: 2.5rem;
            margin-left: 2rem;
        }

        &-title {
            background: var(--pickup2-gradient);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2rem;
            font-weight: 500;
            display: flex;
            gap: 1rem;
        }
    }
}
</style>

<template>
  <div
    v-for="(service, index) in services"
    :key="service.title + index"
    class="service-long"
  >
    <div class="service-long__main">
      <div class="service-long__sub-container">
        <component
          :is="service.sectionImage"
          :filled="''"
          class="service-long__sub-container-svg"
        />
        <h2 class="service-long__sub-container-title">{{ service.section }}</h2>
      </div>
      <h1 class="service-long__title">{{ service.title }}</h1>
      <p class="service-long__description">
        {{ service.description }}
      </p>
      <div class="service-long__options-container" :class="{'service-long__options-container-odd': index % 2 !== 0}">
        <ul class="service-long__options">
          <div class="service-long__option-container">
            <li
              v-for="option in service.options"
              :key="option.text + index"
              class="service-long__option"
            >
            <div 
                  class="service-long__options-svg"
            >
                <component
                  :is="option.optionImage"
                  :filled="''"
                  class="service-long__options-svg"
                />

            </div>
              <p class="service-long__options-text">
                {{ option.text }}
              </p>
            </li>
          </div>
          <div class="service-long__btn">
            <BaseButton :bg-color="service.buttonColor" />
          </div>
        </ul>
        <div class="service-long__image-container">
          <img
            class="service-long__image"
            :src="service.image"
            alt="Feedback Ratings"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ManagersSVG from "~/assets/BaseIcons/managers.svg";
import TrustSVG from "~/assets/BaseIcons/trust.svg";
import UserSettingsSVG from "~/assets/BaseIcons/userSettings.svg";
import PaperPencilSVG from "~/assets/BaseIcons/paperPencil.svg";
import ChartSVG from "~/assets/BaseIcons/chart.svg";
import HandShakeSVG from "~/assets/BaseIcons/handShake.svg";
import UserMeasurSVG from "~/assets/BaseIcons/userMeasur.svg";
import CommunicationSVG from "~/assets/BaseIcons/communication.svg";
import PerformanceSVG from "~/assets/BaseIcons/performance.svg";
import CooperationSVG from "~/assets/BaseIcons/cooperation.svg";
import Feedback from "~/assets/BaseIcons/t1.jpeg";
import Manager from "~/assets/BaseIcons/s2.jpg";

const services = [
  {
    section: "Managers",
    sectionImage: ManagersSVG,
    buttonText: "Learn more",
    title: "Navigate, succeed, analyze, delegate, connect All in one place",
    description:
      "Enhance your managerial efficiency with our advanced analytics, delegated team control, and fast access to an extensive partner network, all designed to streamline your leadership.",
    image: Manager,
    buttonColor: "var(--dark-blue)",
    options: [
      {
        text: "Transparency and compactness when entering the documentation",
        optionImage: PaperPencilSVG,
      },
      {
        text: "Assignment and rotation of tasks, structural hierarchy of employees",
        optionImage: UserSettingsSVG,
      },
      {
        text: "Visual analysis of costs, orders and schedule",
        optionImage: ChartSVG,
      },
      {
        text: "Access to an affiliate network in just a few clicks",
        optionImage: HandShakeSVG,
      },
    ],
  },
  {
    section: "Trust and feedback",
    sectionImage: TrustSVG,
    buttonText: "Learn more",
    title: "Feedback at every level from companies to individuals",
    description:
      "Optimize your decision-making with our evaluation system, offering detailed ratings for companies and individual employees, enhancing your business insights.",
    image: Feedback,
    buttonColor: "var(--dark-blue)",
    options: [
      { text: "Measuring the quality of service", optionImage: UserMeasurSVG },
      {
        text: "Mutual exchange for the impression of professional communication",
        optionImage: CommunicationSVG,
      },
      {
        text: "Innovative qualifying the employee's performance",
        optionImage: PerformanceSVG,
      },
      {
        text: "Assessment of cooperation. Forecast for successful business",
        optionImage: CooperationSVG,
      },
    ],
  },
];
// Script setup area if needed
</script>

<style lang="scss" scoped>
:deep(.button) {
  width: 100%;
}
.service-long {
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;  // TODO


  .service-long__main {
    max-width: $breakpoint-maxsize;
    margin: 3% auto 10rem auto;
    padding: 0 1.5rem;

    @media (min-width: $breakpoint-large) {
      margin:5% auto;
    }
}
    &__sub-container {
      display: flex;
      align-items: center;
      justify-self: center;
      gap: 1rem;
      margin-bottom: 1rem;

      &-title {
        font-size: 2.4rem;
        font-weight: 700;
        background: var(--pickup2-gradient-2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &-svg {
        align-items: baseline;
        height: 3rem;
        width: 3rem;
      }
    }

    &__title {
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--dark-blue);
      margin-bottom: 3rem;
    }

    &__options-container,
    &__options-container-odd {
      display: flex;
      gap: 5rem;
    flex-direction: column-reverse;

      @media(min-width: $breakpoint-medium){
        flex-direction: row;
        
        }
      }
    &__options-container-odd{
        @media(min-width: $breakpoint-medium){
        flex-direction: row-reverse;

        }
    }
    &__description {
      margin-bottom: 3rem;
      font-size: 1.6rem;
      font-weight: 300;
      @media(min-width: $breakpoint-large){
        max-width: 75%;
      }
    }

    &__image-container {
      width: auto;
      max-height: 40rem;
      height: 40rem;

      @media (min-width: $breakpoint_medium) {
        width: 60%;
      height: auto;

      }
    }

    &__image {
      width: 100%;
      border-radius: 1.6rem;
      object-fit: cover;
      height: 100%;
    }

    &__options {
      margin-top: 1rem;
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media(min-width: $breakpoint-medium){
      width: 40%;

      }

      &-svg {
        width: 4.5rem;
        height: 4.5rem;
      }

      &-text {
        font-size: 1.6rem;
        font-weight: 300;
      }
    }
    &__option-container{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
        @media(min-width: $breakpoint-verysmall){
            display: grid;
  grid-template-columns: repeat(2, 1fr);
        }
        @media(min-width: $breakpoint-medium){
            display: flex;
        }
    }
    &__option {
      display: flex;
      margin: 1rem 0;
      gap: 1rem;
      align-items: center;
    }

    &__btn {
      width: 30rem;
      margin-top: 2rem;
      @media (min-width: $breakpoint-large) {
        width: 40rem;
      }
    }
  }
</style>

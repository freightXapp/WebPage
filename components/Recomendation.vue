<template>
    <section class="recommendation">
        <h1 class="recommendation__title">Recommendations</h1>
        <Swiper 
            :modules="[Pagination, Autoplay]" :pagination="{
            enabled: true,
            clickable: true,
            type: 'bullets',
            dynamicBullets: true,
            dynamicMainBullets: 2,
        }" class="recommendation__swiper" :lazy="true" :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-50%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 1],
            },
        }" :breakpoints="breakpoints"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }">
            <swiper-slide
             v-for="(recomendation, i) in exampleContent" :key="recomendation.userName + i"
                class="recommendation__slide">
                <div class="recommendation__content">
                    <div class="recommendation__image-container">
                        <img 
                        :src="recomendation.userImage" :alt="recomendation.userName"
                            class="recommendation__image"></img>
                    </div>
                    <div class="recommendation__info">
                        <div class="recommendation__rating">
                            <span v-for="(star, index) in 5" :key="index" class="recommendation__star">
                                <component :is="getStarType(recomendation.stars, index)" :filled="''" />
                            </span>
                        </div>
                        <QuoteSVG class="recommendation__quote-svg" :filled="''" />
                        <h3 class="recommendation__username">{{ recomendation.userName }}</h3>
                        <blockquote class="recommendation__quote">
                            <p class="recommendation__text">
                                {{ recomendation.recomendationsText }}
                            </p>
                            <div class="recommendation__footer">
                                <p class="recommendation__company">
                                    Company:
                                    <small v-if="recomendation.companyName">{{ recomendation.companyName }}</small>

                                </p>

                                <img 
                                v-if="recomendation.companyLogo" :src="recomendation.companyLogo" alt="image"
                                    class="recommendation__company-logo">
                            </div>
                        </blockquote>
                    </div>
                </div>
            </swiper-slide>
        </Swiper>
    </section>
</template>

<script setup lang="ts">
import {
    Pagination,
    Autoplay,
} from "swiper/modules";
import starSVG from "~/assets/BaseIcons/star.svg";
import QuoteSVG from "~/assets/BaseIcons/quote.svg";
import startNoFill from '~/assets/BaseIcons/starNoFill.svg';
import starHalfSVG from '~/assets/BaseIcons/starHalf.svg';


const exampleContent = [
    {
        userImage: 'img/sexyHaker.jpeg',
        stars: 4.5,
        userName: 'Only Fans Sexy Haker',
        recomendationsText: "This TMS platform streamlines our shipping operations by providing real-time tracking and efficient route optimization, leading to significant cost savings and improved delivery times.",
        companyName: 'Eco Trans',
        companyLogo: '/img/2.png'
    },

    {
        userImage: 'img/sexyNaka.jpeg',
        stars: 5,
        userName: 'Totò Riina',
        recomendationsText: "The customer support team from Pickup2 is outstanding. They're always available to help with any issues or to provide guidance on how to make the most of the system's features.",
        companyName: 'Hydra Transportation Services',
        companyLogo: '/img/4.png'
    },
    {
        userImage: 'img/sexyToni.jpeg',
        stars: 5,
        userName: 'Bernardo Provenzano',
        recomendationsText: "Adopting this TMS has transformed our logistics operations. Its integration capabilities with other tools are seamless, making it an indispensable part of our workflow.",
        companyName: 'Global Lorem',
        companyLogo: '/img/7.png'
    },
    {
        userImage: 'img/sexyDrop.jpeg',
        stars: 5,
        userName: "Salvatore 'Toto' Schillaci",
        recomendationsText: "The scalability of this TMS is impressive. It easily adapts to the changing needs of our business, supporting our growth with minimal adjustments required.",
        companyName: 'World Wide Ipsum',
        companyLogo: '/img/8.png'
    },
    {
        userImage: 'img/sexyBlack.png',
        stars: 3.5,
        userName: "John Smith",
        recomendationsText: "I highly recommend this TMS for its user-friendly interface and robust analytical tools, which empower us to make data-driven decisions and enhance our supply chain efficiency.",
        companyName: 'World Trans',
        companyLogo: '/img/3.png'
    },
];

const getStarType = (rating: number, index: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    if (index < fullStars) {
        return starSVG;
    }
    else if (index === fullStars && hasHalfStar) {
        return starHalfSVG;
    }
    else {
        return startNoFill;
    }
};


const breakpoints = {
    0: {
        slidesPerView: 1,
        spacebetween: 20,
    },

    768: {
        spacebetween: 10,
        slidesPerView: 2,
    },
    1200: {
        spacebetween: 20,
        slidesPerView: 3,
    },
};
</script>

<style scoped lang="scss">
:deep(.swiper-pagination) {
    margin-top: 10rem;
}

.recommendation {
    padding: 5rem 0;
    max-width: $breakpoint_maxsize;
  margin: 0 auto;

    &__title{
        text-align: center;
        font-size: 2.6rem;
        background: var(--pickup2-gradient-2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media(min-width: $breakpoint-large){
            font-size: 3.6rem;
        }
    }

    &__swiper {
        width: 100%;
        height: 100%;
    }

    &__slide {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10rem 0;
    }

    &__content {
        position: relative;
        background: var(--white);
        border-radius: 1rem;
        box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
        padding: 2rem;
        text-align: center;
        max-width: 30rem;
    }

    &__image-container {
        top: -6rem;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        position: absolute;
        width: 8rem;
        height: 8rem;
        margin: 0 auto 1rem;
        overflow: hidden;
        border-radius: 50%;
    }

    &__image {
        width: 100%;
        height: inherit;
        object-fit: cover;
    }

    &__info {
        margin-top: 1rem;
    }

    &__rating {
        display: flex;
        justify-content: center;
        margin: 2rem 0 1rem 0;
    }

    &__star {
        margin: 0 0.2rem;
    }

    &__username {
        margin: 2rem;
        font-weight: 600;
    }

    &__quote {
        font-style: italic;
    }

    &__quote-svg {
        height: 2rem;
        width: 2rem;
    }

    &__text {
        margin: 4rem 0;
        @include trim(10)
    }

    &__footer {
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 2rem;

    }

    &__company {
        margin-top: 0.5rem;
        font-size: 1.6rem;
        font-weight: 500;
        display: flex;
        flex-direction: column;

        & small {
            font-size: 1.4rem;
            color: var(--text-grey-dark)
        }
    }

    &__company-logo {
        width: 4rem;
    }

}
</style>

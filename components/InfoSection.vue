<template>
    <section class="pickup-section">
        <div class="pickup-section__content" :class="{ 'reverse': reverse }">
            <div class="pickup-section__text">
                <h1 class="pickup-section__title">{{ title }}</h1>
                <p v-for="paragraphText, index in description" :key="paragraphText + index">
                    {{ paragraphText }}
                </p>
            </div>
            <div class="pickup-section__illustration">
                <img :src="illustration" :alt="title"></img>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    title: string;
    description: string[];
    illustration: string;
    reverse: boolean;
}

withDefaults(defineProps<Props>(), {
    reverse: false,
});
</script>

<style lang="scss" scoped>
.reverse {
    @media(min-width: $breakpoint_small) {
        flex-direction: row !important;
    }
}

.pickup-section {
    .pickup-section__content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 2rem;
        background: var(--light-white);

        @media(min-width: $breakpoint_small) {
            flex-direction: row-reverse;
        }



        .pickup-section__text {
            order: 2;

            h1 {
                font-size: 3rem;
                margin-bottom: 3rem;
                text-transform: uppercase;
                color: var(--dark-blue);
            }

            p {
                font-size: 1.2em;
                margin-bottom: 2rem;
                font-weight: 300;

                &:nth-of-type(1)::first-letter {
                    initial-letter: 2;
                    color: var(--main-orange);
                    font-weight: 400;
                }
            }
        }

        .pickup-section__illustration {
            flex: 1;

            img {
                display: block;
                margin: 0 auto;
                max-width: 100%;
                height: auto;


            }
        }
    }

    @media(min-width: $breakpoint_mobiletabs) {
        .pickup-section__content {
            .pickup-section__illustration {
                img {
                    max-width: 70%;

                }
            }

            .pickup-section__text {
                h1 {
                    margin: 1rem 3% 0;
                }

                p {
                    margin: 2rem 3%;
                }
            }
        }

    }

    @media(min-width: $breakpoint_small) {
        .pickup-section__content {
            .pickup-section__illustration {
                img {
                    max-width: 90%;

                }
            }

            .pickup-section__text {
                max-width: 50%;
            }
        }

    }

    @media(min-width: $breakpoint_medium) {
        .pickup-section__content {
            .pickup-section__text {
                margin-left: 4%;

                h1 {
                    font-size: 3rem
                }

                p {
                    font-size: 2rem;
                }
            }

            .pickup-section__illustration {
                img {
                    width: 100%;
                    max-width: 70%;
                }
            }
        }

    }

    @media(min-width: $breakpoint_large) {
        .pickup-section__content {

            .pickup-section__illustration {
                img {
                    width: 100%;
                    max-width: 90%;
                }
            }

            .pickup-section__text {
                width: auto;
                margin-left: 10%;

                p,
                h1 {
                    margin: 2rem 10%;
                }
                h1{
                    font-size: 3.5rem;
                }
                p{
                    font-size: 2.5rem;
                }
            }
        }

    }
}
</style>

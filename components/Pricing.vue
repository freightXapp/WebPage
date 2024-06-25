<template>
    <div class="pricing__section">
        <div class="pricing__header">
            <h2>Simple, transparent pricing</h2>
            <p>
                We believe Untitled should be accessible to all companies, no matter the
                size.
            </p>

            <div class="toggle">
                <button :class="{ active: billingCycle === 'monthly' }" @click="billingCycle = 'monthly'">
                    Monthly billing
                </button>
                <button :class="{ 'active-right': billingCycle === 'annually' }" @click="billingCycle = 'annually'">
                    Annually billing
                </button>
            </div>
        </div>
        <div class="pricing__cards">
            <div
                v-for="plan in plans" :key="plan.name" :class="[
                'pricing__card',
                { 'pricing__card-selected': selectedCard === plan.id },
            ]" @click="selectCard(plan.id)">
                <div class="pricing__bg">
                    <h3 class="pricing__name">{{ plan.name }}</h3>
                    <p class="price pricing__price">
                        {{ plan.price[billingCycle]
                        }}<small> / {{ changeWording(billingCycle) }}</small>
                    </p>
                    <p v-if="!plan.discountPrice" class="pricing__discount">
                        {{ plan.discountPrice }}
                    </p>

                    <ul>
                        <li v-for="feature in plan.features" :key="feature" class="pricing__feature-container">
                            <CheckOk class="pricing__marker" :filled="''" />
                            <p class="pricing__feature">
                                {{ feature }}
                            </p>
                        </li>
                    </ul>
                    <button>Get started</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckOk from "~/assets/BaseIcons/ckeckOk.svg";

const selectedCard = ref(1);
const selectCard = (id: number) => {
    selectedCard.value = id;
};

const changeWording = (word: string) => {
    return word == "monthly" ? "mo" : "yr";
};
const billingCycle = ref("monthly");
const plans = ref([
    {
        id: 1,
        name: "Basic plan",
        price: { monthly: "$10", annually: "$100" },
        discountPrice: "",
        features: [
            "Employee directory",
            "Task management",
            "Calendar integration",
            "File storage",
            "Communication tools",
            "Reporting and analytics",
        ],
    },
    {
        id: 2,
        name: "Enterprise plan",
        price: { monthly: "$20", annually: "$200" },
        discountPrice: "",
        features: [
            "Advanced employee directory",
            "Project management",
            "Resource scheduling",
            "Version control",
            "Team collaboration",
            "Advanced analytics",
        ],
    },
]);
onMounted(() => {
    document.querySelector(".header").style.background = "var(--main-blue)";
});
</script>

<style lang="scss" scoped>
.pricing {
    &__feature {
        font-size: 1.3rem;
        align-content: center;
    }

    &__feature-container {
        display: flex;
    }

    &__marker {
        color: var(--exist-green);
        margin-right: 1rem;
        height: 3rem;
        font-size: 2.3rem;
    }

    &__bg {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }

    &__name {
        font-size: 1.1rem;
        border: 0.1rem solid var(--light-text);
        color: var(--dark-text);
        border-radius: 5rem;
        width: max-content;
        padding: 0.5rem 2rem;
        height: 3rem;
        align-items: center;
        display: flex;

        &:before {
            content: "• ";
            font-size: 3rem;
            margin-bottom: 0.6rem;
            margin-right: 0.6rem;
            color: var(--baby-blue);
        }
    }

    &__price {
        font-size: 4rem;
        margin-bottom: 1rem;
        font-weight: bold;
        margin: 2rem;
    }

    &__section {
        overflow: hidden;
        min-height: calc(100vh);
        padding: 0;
        margin-top: 15rem;
        text-align: center;
        @media(min-width: $breakpoint-small){
        padding: 2rem;

        }
    }

    &__cards {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        gap: 4rem;
        position: relative;
        flex-direction: column;
        width: 100%;

        &::after {
            position: absolute;
            content: " ";
            background-color: var(--main-blue);
            clip-path: polygon(4px 55.84%, 99.88% 47px, 100.23% 99.79%, 1px 99.79%);
            height: 80%;
            width: 100%;
            z-index: -1;
            top: 10rem;
        }

        @media (min-width: $breakpoint-small) {
            flex-direction: row;

            &::after {
                height: 100%;
            }
        }
    }

    &__header {
        margin-bottom: 2rem;

        h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        p {
            font-weight: 300;
            margin-top: 1.5rem;
        }

        .toggle {
            display: inline-flex;
            border: 0.2rem solid var(--border);
            border-radius: 2rem;
            margin: 3rem 0;
         

            button {
                background: transparent;
                border: none;
                padding: 1rem 1rem;
                cursor: pointer;
                font-size: 1.2rem;
                color: black;
                transition: all 0.5s ease;

                &.active {
                    border-top-left-radius: 2rem;
                    border-bottom-left-radius: 2rem;

                    background: var(--main-blue);
                    color: var(--white);
                    box-shadow: 0rem 0rem 3rem var(--main-blue);
                }
                 &.active-right {
                    border-top-right-radius: 2rem;
                    border-bottom-right-radius: 2rem;

                    background: var(--main-blue);
                    color: var(--white);
                    box-shadow: 0rem 0rem 3rem var(--main-blue);

                   
                }
            }
        }
    }

    &__card {
        background: var(--white-smoke);
        border: 0.1rem solid var(--border);
        border-radius: 1rem;
        padding: 2rem 3rem 2rem 2rem;
        width: 30rem;
        text-align: left;
        box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
        border: 0.2rem solid var(--placeholder);
        margin: 0 auto;

        @media (min-width: $breakpoint-small) {
            margin: 0;
        }

        &-selected {
            border: 0.2rem solid var(--main-orange);
            box-shadow: 0.2rem 0.7rem 1.6rem var(--main-orange);
             .pricing__name:before
                    {
                    color: var(--main-orange);
                    font-size: 4rem; 
                    }
        }

        ul {
            list-style: none;
            padding: 0;
            margin-bottom: 1rem;

            li {
                margin-bottom: 0.5rem;
            }
        }

        button {
            background: var(--main-orange);
            border: none;
            border-radius: 0.3rem;
            color: var(--white);
            padding: 1rem 1rem;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 300;
            margin-top: 3rem;
            width: 100%;
        }
    }
}
</style>

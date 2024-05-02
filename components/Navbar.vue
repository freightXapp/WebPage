<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo-container">
                <NuxtLink to="/">
                    <pickUp2 class="header__logo" />
                </NuxtLink>
            </div>
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <a href="#" class="header__nav-link">
                            <span>Home</span>
                            <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
                        </a>
                        <div class="header__dropdown">
                            <ul class="header__dropdown-list">
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <!-- <NuxtIcon name="arrow-right" class="header__dropdown-icon" /> -->
                                        <span>Link 1</span>
                                    </a>
                                </li>
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <!-- <NuxtIcon name="arrow-right" class="header__dropdown-icon" /> -->
                                        <span>Link 2</span>
                                    </a>
                                </li>
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <!-- <NuxtIcon name="arrow-right" class="header__dropdown-icon" /> -->
                                        <span>Link 3</span>
                                    </a>
                                </li>
                                <li class="header__dropdown-item">
                                    <a href="#" class="header__dropdown-link">
                                        <!-- <NuxtIcon name="arrow-right" class="header__dropdown-icon" /> -->
                                        <span>Link 4</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header__nav-item">
                        <a href="#" class="header__nav-link">
                            <span>About</span>
                            <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
                        </a>
                        <div class="header__dropdown">
                            <!-- Add dropdown content for "About" -->
                        </div>
                    </li>
                    <li class="header__nav-item">
                        <a href="#" class="header__nav-link">
                            <span>Services</span>
                            <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
                        </a>
                        <div class="header__dropdown">
                            <!-- Add dropdown content for "Services" -->
                        </div>
                    </li>
                    <li class="header__nav-item">
                        <a href="#" class="header__nav-link">
                            <span>Contact</span>
                            <!-- <NuxtIcon name="arrow-down" class="header__nav-icon" /> -->
                        </a>
                        <div class="header__dropdown">
                            <!-- Add dropdown content for "Contact" -->
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="header__auth">
                <a href="#" class="header__auth-link">
                    <!-- <NuxtIcon name="user" class="header__auth-icon" /> -->
                    <span>Login</span>
                </a>
                <a href="#" class="header__auth-link">
                    <!-- <NuxtIcon name="user-plus" class="header__auth-icon" /> -->
                    <span>Register</span>
                </a>
            </div>
        </div>
    </header>
</template>



<script setup lang="ts">
import pickUp2 from "~/assets/Icons/pc2.svg";
</script>


<style lang="scss" scoped>
.header {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;

    &__container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        width: 3.5rem;
        height: 3.5rem;

        // min-width: 3.5rem;
        // min-height: 3.5rem;
        & svg,
        path {
            fill: none;
        }

    }

    &__nav {
        &-list {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        &-item {
            position: relative;
            margin-right: 2rem;

            &:hover {
                .header__dropdown {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
            }
        }

        &-link {
            color: #333;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.5rem 0;
            position: relative;
            overflow: hidden;

            &:hover {
                .header__dropdown {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
            }

            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #007bff;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
            }

            &:hover {
                &::after {
                    transform: translateX(0);
                }
            }
        }

        &-icon {
            margin-left: 0.5rem;
        }
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        min-width: 200px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

        &-list {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        &-item {
            margin-bottom: 0.5rem;
        }

        &-link {
            color: #333;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            position: relative;
            overflow: hidden;

            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #007bff;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
            }

            &:hover {
                &::after {
                    transform: translateX(0);
                }
            }
        }

        &-icon {
            margin-right: 0.5rem;
        }
    }

    &__auth {
        display: flex;
        align-items: center;

        &-link {
            color: #333;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background-color 0.3s ease-in-out;

            &:hover {
                background-color: #f5f5f5;
            }
        }

        &-icon {
            margin-right: 0.5rem;
        }
    }
}
</style>
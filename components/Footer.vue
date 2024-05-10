<template>
  <div>
    <ActionSection class="action-section"></ActionSection>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
      <path
        fill="#151E3A"
        fill-opacity="1"
        d="M0,288L1440,224L1440,320L0,320Z"
      ></path>
    </svg>
  </div>
  <section class="footer">
    <div class="footer__row">
      <div class="footer__column footer__column--info">
        <h4 class="footer__title">Info</h4>
        <ul class="footer__links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Compressions</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Collection</a></li>
        </ul>
      </div>

      <div class="footer__column footer__column--explore">
        <h4 class="footer__title">Explore</h4>
        <ul class="footer__links">
          <li><a href="#">Free Designs</a></li>
          <li><a href="#">Latest Designs</a></li>
          <li><a href="#">Themes</a></li>
          <li><a href="#">Popular Designs</a></li>
          <li><a href="#">Art Skills</a></li>
        </ul>
      </div>

      <div class="footer__column footer__column--legal">
        <h4 class="footer__title">Legal</h4>
        <ul class="footer__links">
          <li><a href="#">Customer Agreement</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">GDPR</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>

      <div class="footer__column footer__logo">
        <NuxtLink to="/">
          <pickUp2 :filled="''" class="footer__logo--svg" />
        </NuxtLink>
        <p class="footer__logo--description">
          Partners in optimized transport process
        </p>
        <div class="footer__icons">
          <Facebook class="footer__icons--svg" />
          <Instagram class="footer__icons--svg" />
          <Linkedin class="footer__icons--svg" />
          <Twitter class="footer__icons--svg" />
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright--text">
          All Rights Reserved © Pickup2 2024
        </p>
        <div class="footer__rules">
          <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Facebook from "~/assets/BaseIcons/facebook.svg";
import Instagram from "~/assets/BaseIcons/instagram.svg";
import Linkedin from "~/assets/BaseIcons/linkedin.svg";
import Twitter from "~/assets/BaseIcons/twitterX.svg";
import pickUp2 from "~/assets/BaseIcons/pc2-dark.svg";
</script>

<style lang="scss" scoped>
.action-section {
  margin-bottom: -350px;
  z-index: 1;
}
.wave {
  display: block;
  margin-top: 0;
}
.footer {
  position: relative;
  width: 100%;
  background: #151e3a;
  color: black;
  padding: 30px 30px 15px;
  overflow: hidden;
  bottom: 0;
  left: 0;
  margin-top: auto;
  clip-path: polygon(0 -10%, 100% 50%, 200%% 100%, 50% 100%);

  &:before {
    content: "";
    position: absolute;
    top: -20px; // Adjust based on the depth of the wave
    left: 0;
    width: 200%;
    height: 100px; // Adjust based on the depth of the wave
    background: inherit;

    transform: rotate(-3deg); // Rotate to create a slant
    transform-origin: left;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__column {
    flex: 1 1 240px; // Ensure all columns are flexible and align nicely
    &--info,
    &--explore,
    &--legal {
      h4 {
        color: #c6c6c7;
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }

  &__logo {
    &--svg {
      width: 10rem;
      height: 5rem;
    }
    p {
      font-weight: 700;
      color: #c6c6c7;
    }
  }
  &__copyright {
    padding: 20px 0px;
    width: 100%;

    &--text {
      font-size: 1.4rem;
      font-weight: 200;
      color: #c6c6c7;
      text-align: left;
    }
  }

  &__rules {
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: white;
    font-weight: 100;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  &__links {
    margin-top: 20px;
    li {
      list-style: none;
      margin-bottom: 10px;
      position: relative;
    }
    a {
      font-size: 1.5rem;
      font-weight: 300;
      text-decoration: none;
      color: #c6c6c7;
      display: inline-block;
      &:hover {
        color: #c46b18;
      }
    }
  }

  &__icons {
    display: flex;

    margin-top: 30px;
    gap: 20px; // Adjusted the gap to reduce spacing

    &--svg {
      color: #c6c6c7;
      width: 1.5em; // Adjust size if necessary
      height: 1.5em; // Adjust size if necessary
      border: 2px solid #c6c6c7; // Adds a solid border
      border-radius: 50%; // Makes the icon borders circular
      padding: 5px; // Padding inside the border
      transition: all 0.3s ease; // Smooth transition for hover effects

      &:hover {
        background-color: #c46b18; // Changes background on hover
        color: white; // Changes icon color on hover
        transform: scale(
          1.1
        ); // Slightly enlarges the icon on hoversure height matches width for square aspect ratio
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 200px 0 0 0;
    &__row {
      flex-direction: column;
      padding: 20px;
    }
    &__form {
      flex-direction: column;
    }
    &__input,
    &__button {
      width: 100%;
    }
    &__button {
      margin-top: 10px;
    }
  }
}
</style>

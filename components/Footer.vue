<template>
  <section class="footer">
    <div class="footer__row">
      <div class="footer__column footer__logo">
        <NuxtLink to="/">
          <pickUp2White :filled="''" class="footer__logo--svg" />
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

      <div class="footer__copyright">
        <p class="footer__copyright--text">
          All Rights Reserved © Pickup2 2024
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Facebook from "~/assets/BaseIcons/facebook.svg";
import Instagram from "~/assets/BaseIcons/instagram.svg";
import Linkedin from "~/assets/BaseIcons/linkedin.svg";
import Twitter from "~/assets/BaseIcons/twitterX.svg";
import pickUp2White from "~/assets/BaseIcons/pc2.svg";
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  background: var(--main-blue);
  color: black;
  padding: 70px 20px;
  overflow: hidden;
  bottom: 0;
  left: 0;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);

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
    flex: 1 1 240px;
    &--info,
    &--explore,
    &--legal {
      h4 {
        color: #fcfcfc;
        font-size: 1.7rem;
        font-weight: 500;
      }
    }
  }

  &__logo {
    margin-top: -25px;
    &--svg {
      width: 20rem;
      height: 10rem;
    }
    &--description {
      color: #fcfcfc;
      font-weight: 700;
    }
  }
  &__copyright {
    padding: 20px 0px;
    width: 100%;
    &--text {
      font-size: 1.4rem;
      font-weight: 300;
      color: #fcfcfc;
      text-align: left;
      white-space: nowrap;
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
      color: #fcfcfc;
      display: inline-block;
      &:hover {
        color: #c46b18;
      }
    }
  }

  &__icons {
    display: flex;

    margin-top: 30px;
    gap: 20px;

    &--svg {
      color: var(--main-orange);
      width: 1.7em;
      height: 1.7em;
      border: 2px solid var(--main-orange);
      border-radius: 50%;
      padding: 6px;
      transition: all 0.3s ease;
      &:hover {
        background-color: #c46b18;
        color: white;
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 150px 0 0 0;
    &__row {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
    }

    &__logo {
      margin-top: -25px;
      &--svg {
        width: 15rem;
        height: 8rem;
      }
    }

    &__icons {
      gap: 10px;
    }
    &__column {
      flex: 1 1 calc(50% - 38px);
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

@media (max-width: 320px) {
  .footer {
    &__row {
      flex-direction: column;
      gap: 10px;
    }
    &__column {
      flex: 1 1 100%;
    }
  }
}
</style>

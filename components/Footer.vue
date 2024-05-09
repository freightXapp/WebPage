<template>
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
          <li><a href="#">New Uploads</a></li>
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
          <li><a href="#">Media Kit</a></li>
        </ul>
      </div>

      <div class="footer__column footer__column--newsletter">
        <h4 class="footer__title">Newsletter</h4>
        <p>
          Subscribe to our newsletter for a weekly dose of news, updates,
          helpful tips, and exclusive offers.
        </p>
        <form action="#" class="footer__form">
          <input
            type="text"
            placeholder="Your email"
            required
            class="footer__input"
          />
          <BaseButton
            :bg-color="'var(--pc2-orange-button)'"
            :link-path="'https://one2hero.com/'"
            :button-text="'Subscribe'"
            :tag="'a'"
          />
        </form>
        <div class="footer__icons">
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
        </div>
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
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  background: #f7f7fa;
  color: black;
  padding: 40px 15px;
  bottom: 0;
  left: 0;
  margin-top: auto;

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
    &--legal,
    &--newsletter {
      h4 {
        color: #202a4b;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
  &__copyright {
    width: 100%;
    text-align: center;
    &--text {
      font-size: 1.4rem;
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
      font-size: 1.2rem;
      font-weight: 400;
      text-decoration: none;
      color: #000000;
      display: inline-block;

      &:hover {
        &::after {
          opacity: 1;
          transform: translateX(0%);
        }
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: var(--baby-blue, #7489c6);
        transform: translateX(-30%);
        transition: transform 0.3s ease-in-out;
        opacity: 0;
      }
    }
  }

  &__form {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  &__input {
    flex: 1 0 50%;
    height: 40px;
    border-radius: 6px;
    background: none;
    outline: none;
    border: 1px solid var(--baby-blue, #7489c6);
    caret-color: #010101;
    color: #0a0909;
    padding-left: 10px;
    &::placeholder {
      color: #010101;
    }
  }

  &__button {
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s ease;
    &:hover {
      background: #cecccc;
    }
  }

  &__icons {
    display: flex;
    margin-top: 30px;
    gap: 30px;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .footer {
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

<template>
    <!-- VIDEO -->
  <MainVideoContent
    :data="[{ src: '../videos/rating.webm', type: 'video/webm' }]"
  />
  <!--  INFO SECTION -->
  <section class="pickup-section">
    <div class="content">
      <div class="text">
        <h1>At PickUp2,</h1>
        <p>
          we understand that successful freight forwarding requires not only precise planning and coordination, but also flexibility to deal with various challenges.
        </p>
        <p>
          Our platform offers integrated tools that make it easier for freight forwarders to manage orders, communicate with trustees and carriers, and optimize transport routes.
        </p>
      </div>
      <div class="illustration">
    <img class="section__illustration" :src="Illustration"  alt="Freight forwarding illustration" />
      </div>
    </div>
  </section>

 <!--  FEATURE -->
  <div class="features-container">
    <div class="feature">
      <div class="icon"><span class="material-icons-outlined">settings_ethernet</span></div>
      <h3>Planning And Coordination</h3>
      <p>Organize and manage transport routes with precision and efficiency.</p>
    </div>
    <div class="feature">
      <div class="icon"><span class="material-icons-outlined">chat</span></div>
      <h3>Communication And Collaboration</h3>
      <p>Maintain seamless communication between consignees and carriers for a smooth transportation process.</p>
    </div>
    <div class="feature">
      <div class="icon"><span class="material-icons-outlined">security</span></div>
      <h3>Tracking And Security</h3>
      <p>Track your freight in real time and ensure its safety and timely delivery.</p>
    </div>
    <div class="feature">
      <div class="icon"><span class="material-icons-outlined">attach_money</span></div>
      <h3>Cost Optimization</h3>
      <p>Optimize your costs by choosing the most efficient and economical transport solutions.</p>
    </div>
  </div>

<!-- PROMO -->
 <div class="promo-container">
    <div class="promo-image">
      <!-- Image simulating a dashboard (use an actual screenshot in your project) -->
      <img :src="dash" alt="Logistics Dashboard">
    </div>
    <div class="promo-text">
      <h2>Are you looking for effective solutions to manage your logistics operations?</h2>
      <p>Get started with PickUp2 today and optimize your freight forwarding processes!</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Illustration from "../assets/BaseIcons/forwardersIlustration.webp";
import dash from '../assets/BaseIcons/dash.jpeg';
</script>

<style lang="scss" scoped>
// SECTIOM
.pickup-section {
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .text {
      flex: 1;
      padding-right: 20px;
      h1 {
        font-size: 2em;
        margin-bottom: 10px;
      }
      p {
        font-size: 1em;
        margin-bottom: 10px;
      }
    }

    .illustration {
      flex: 1;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 992px) {
  .pickup-section {
    .content {
      flex-direction: column;

      .text {
        padding-right: 0;
        order: 2;
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }

      .illustration {
        order: 1;
        margin-bottom: 20px;
        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}

// features
.features-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
  .icon {
    font-size: 40px;
    color: #555;
  }

  h3 {
    margin: 20px 0 10px;
    color: #333;
  }

  p {
    color: #666;
  }
}

// PROMO
.promo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.promo-image img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  rotate: 20deg
}

.promo-text {
  max-width: 50%;
  margin-left: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }

  h2 {
    font-size: 1.5em;
    color: #333;
  }

  p {
    font-size: 1em;
    color: #666;
  }
}
</style>

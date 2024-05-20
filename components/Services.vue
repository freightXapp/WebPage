<template>
  <section class="about-section">
    <div class="auto-container">
      <div class="row">
        <div class="content-column fadeInRight animated">
          <div class="inner-column slide-in-right">
            <div class="sec-title">
              <span class="sub-title">More About Us</span>
              <h2>Reliable Transport Solutions <br />Saves Your Time!</h2>
            </div>
            <div class="text2">
              Welcome to Pickup2, a trailblazing logistics company dedicated to
              propelling your business towards unparalleled success.
            </div>
            <div class="text">
              At Transend, we redefine the boundaries of supply chain
              management, leveraging cutting-edge technology and innovative
              solutions to deliver seamless logistics services to our valued
              clients. With a commitment to excellence, Transend takes pride in
              offering a comprehensive suite of services, including
              transportation, warehousing, inventory management, customs
              clearance, and last-mile delivery.
            </div>
            <div class="btn-box">
              <div class="button-container">
                <a href="/" class="button theme-btn">
                  <addSVG class="btn-box__img" />
                  Our Services</a
                >
              </div>
              <div class="founder-info">
                <div class="thumb">
                  <img src="../assets/BaseIcons/sexyHaker.jpeg" alt="" />
                </div>
                <div class="content">
                  <h5 class="name">Sexy Haker</h5>
                  <span class="designation">Sexyman</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="image-column">
          <div class="inner-column">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/BaseIcons/truck.jpeg" alt="" />
              </figure>
              <div class="experience">
                <strong>5+</strong>
                <div class="text">Years of<br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import addSVG from "~/assets/BaseIcons/add.svg";
</script>
<style lang="scss" scoped>
.button-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.button {
  padding: 10px 20px;
  background-color: var(--main-orange);
  color: white;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.button::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-blue);
  z-index: -1;
  animation: slideOut 0.3s forwards;
}

.button-container:hover .button::before {
  animation: slideIn 0.3s forwards;
}

@keyframes slideIn {
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
}

@keyframes slideOut {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.button-container:hover .button {
  color: white;
}

.about-section {
  margin-bottom: 5rem;
  .auto-container {
    max-width: $breakpoint-maxsize;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .row {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    @media (min-width: $breakpoint_medium) {
      flex-direction: row;
    }
    .content-column {
      order: 2;

      .inner-column {
        .sec-title {
          .sub-title {
            color: #ff6600;
            font-size: 1.6rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          h2 {
            font-size: 3.6rem;
            line-height: 1.2;
            margin-bottom: 2rem;
          }
        }

        .text2 {
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          color: var(--text-grey);
        }

        .text {
          margin-bottom: 3rem;
          font-size: 1.6rem;
          color: var(--text-grey-dark);
        }

        .btn-box {
          display: flex;
          align-items: center;
          flex-direction: column;

          gap: 4rem;
          @media (min-width: $breakpoint_mobiletabs) {
            flex-direction: row-reverse;
          }

          @media (min-width: $breakpoint-medium) {
            flex-direction: row;
          }
          &__img {
            margin-right: 1rem;
          }

          .theme-btn {
            background-color: var(--main-orange);
            color: var(--white);
            padding: 1.5rem 2rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            z-index: 1;

            .icon {
              margin-right: 1rem;
            }

            .btn-title {
              font-size: 1.6rem;
            }
          }

          .founder-info {
            display: flex;
            align-items: center;

            .thumb {
              width: 7rem;
              height: 7rem;
              margin-right: 1rem;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
              }
            }

            .content {
              .name {
                font-size: 1.6rem;
                font-weight: 600;
              }

              .designation {
                font-size: 1.4rem;
                color: var(--text-grey-light);
              }
            }
          }
        }
      }
    }

    .image-column {
      .inner-column {
        .image-box {
          position: relative;

          .image {
            margin-bottom: 0;
            position: relative;
            & img {
              width: 100%;
            }
            @media (min-width: $breakpoint-medium) {
              & img {
                width: auto;
              }
            }
          }

          .experience {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            background-color: var(--main-orange);
            color: var(--white);
            padding: 2rem 3rem;
            text-align: center;

            .text {
              font-size: 1.4rem;
              color: var(--white);
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="tabs-component">
    <div class="tabs-icons">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: currentTab === tab.id }"
        @click="selectTab(tab.id)"
        class="tab-icon"
      >
        <img :src="tab.icon" :alt="tab.name" />
        <p>{{ tab.name }}</p>
      </div>
    </div>
    <swiper :options="swiperOptions" class="tabs-content">
      <swiper-slide v-for="tab in tabs" :key="tab.id">
        <div
          :class="[
            'tab-content',
            { 'image-left': index % 2 === 0, 'image-right': index % 2 !== 0 },
          ]"
          v-if="currentTab === tab.id"
        >
          <img :src="tab.image" :alt="tab.name" class="tab-image" />
          <div class="tab-text">
            <div v-html="tab.content"></div>
            <div v-if="tab.subtitle" class="tab-subtitle">
              {{ tab.subtitle }}
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      currentTab: "boosting",
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        },
      },
      tabs: [
        {
          id: "boosting",
          name: "Boosting",
          icon: require("~/assets/BaseIcons/boosting.svg"),
          content:
            "The urgency of an order is not to be ignored?<br><br> Or do you intend to pay special attention to your case? The sponsored ad is responding to help. An efficient and cost-effective way to keep your workflow in shape. Don't let a single urgency slow down the entire business flow.",
          image: require("@/assets/services1Img.png"),
        },
        {
          id: "filter",
          name: "Filter",
          icon: require("@/assets/filterSvg.svg"),
          content:
            "Do you have preferences for what kind of ads should be displayed on your desktop?<br><br> Take advantage of the enriched features for customized search. Turn your working day into a pleasant pleasure. PicкUp2's lightweight interface allows you to take full advantage of digitized tools.",
          image: require("@/assets/services2Img.png"),
        },
        {
          id: "rating",
          name: "Rating Transfer",
          icon: require("@/assets/ratingSvg.svg"),
          content:
            "Chronology. Payments. Documentation. How nice it would be if all this was transparent, wouldn't it?<br><br> Valuable partnerships are built with hard work and constant communication. We at the PickUp2 know this. To this purpose, we have developed our rating system into a more productive tool.<br><br> Allow us to transfer your ratings from other sources and implement them in your profile.",
          subtitle: "Don't let your past good performance be forgotten.",
          image: require("@/assets/services3Img.png"),
        },
        {
          id: "rewards",
          name: "Rewards",
          icon: require("@/assets/rewardsSvg.svg"),
          content:
            "The roads are full of fines and penalties. It is no different in the path of the entrepreneur.<br><br> A system works well both when there is a regulation and when there is a reward mechanism. We aim to provide the latter. Achieve certain steps and get your financial relief in the PickUp2 system.",
          image: require("@/assets/services4Img.png"),
        },
      ],
    };
  },
  methods: {
    selectTab(tabId) {
      this.currentTab = tabId;
    },
  },
};
</script>

<style scoped>
.tabs-component {
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
}

.tabs-icons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab-icon {
  cursor: pointer;
}

.tab-icon.active img {
  border: 2px solid blue;
}

.tabs-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-content.image-left {
  flex-direction: row;
}

.tab-content.image-right {
  flex-direction: row-reverse;
}

.tab-image {
  max-width: 400px;
  margin: 0 20px;
}

.tab-text {
  max-width: 600px;
  text-align: left;
}

.tab-subtitle {
  margin-top: 10px;
  font-weight: bold;
}
</style>

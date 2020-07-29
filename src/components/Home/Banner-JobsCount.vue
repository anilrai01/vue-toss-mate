<template>
  <div class="banner-job">
    <div class="green-mask"></div>
    <h1 class="text-white font-weight-bold font-helvNeue">
      What needs to be done ?
    </h1>
    <div class="s-row mt-4">
      <div
        v-for="(job, index) in jobLists"
        :key="index"
        class="s-col"
        @click="handleRouteClick(job.iconName)"
      >
        <!-- <div class="svg-icon c-p">
          <object type="image/svg+xml" :data="job.icon" class="svg-i-icon c-p"></object>
        </div>-->
        <div class="svg-bg">
          <img :src="job.icon" alt class="svg-icon c-p" />
        </div>
        <h6>{{ job.iconName }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import PlumberIcon from "../../assets/Icon map-plumber.svg";
import ElectricianIcon from "../../assets/Icon map-electrician.svg";
import Painting from "../../assets/Icon awesome-paint-roller.svg";
import Repairing from "../../assets/Icon ionic-ios-construct.svg";
import Ac from "../../assets/Icon awesome-air-freshener.svg";
import Moving from "../../assets/Icon awesome-truck-moving.svg";
import Gardening from "../../assets/Icon material-nature.svg";

import { mapActions } from "vuex";
export default {
  name: "BannerJobs",
  components: {},
  data() {
    return {
      jobLists: [
        {
          icon: PlumberIcon,
          iconName: "Plumbing",
        },
        {
          icon: ElectricianIcon,
          iconName: "Electrician",
        },
        {
          icon: Painting,
          iconName: "Painting",
        },
        {
          icon: Repairing,
          iconName: "Repairing",
        },
        {
          icon: Gardening,
          iconName: "Gardening",
        },
        {
          icon: Ac,
          iconName: "Air Conditioning",
        },
        {
          icon: Moving,
          iconName: "Moving",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["setQuoteBusiness", "setNmultiStepFormDispStat"]),
    handleRouteClick(param) {
      this.setQuoteBusiness(param);
      this.setNmultiStepFormDispStat(true);
    },
  },
};
</script>

<style scoped>
.banner-job {
  width: 80%;
  height: 100%;
  margin: auto;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-job * {
  z-index: 10;
}
.banner-job h1 {
  margin-bottom: 4rem;
}
.s-row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13%, 1fr));
}
.s-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.s-col .svg-icon {
  flex-basis: 80%;
}
.s-col h6 {
  flex-basis: 20%;
  font-weight: bold;
}
h3 {
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.col {
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  font-weight: bold;
}
h6 {
  color: #ebebeb;
}

.f1,
.f2,
.f3 {
  color: #fff;
}

/* SVG Icon */
.svg-icon {
  transform: scale(0.7) rotate(-45deg);
  cursor: pointer;
  /* margin-bottom: 3rem; */
  transition: all 0.5s ease-in-out;
}
.svg-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;
  margin-bottom: 3rem;
  background: rgba(60, 143, 26, 0.7);
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;
}
/* .svg-icon object {
  z-index: 1;
} */
/* .svg-icon::before {
  content: "";
  position: absolute;
  width: 7rem;
  height: 7rem;
  background: rgba(60, 143, 26, 0.7); 
  background: red;
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;
} */
.svg-bg:hover {
  transform: rotate(-135deg);
}
.svg-bg:hover .svg-icon {
  transform: rotate(135deg) scale(0.9);
}
</style>

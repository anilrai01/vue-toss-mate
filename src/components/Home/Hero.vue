<template>
  <Banner height="100" :img_url="sendMainBG" class="hero-img">
    <div class="hero-banner-content">
      <div class="logo-n-all">
        <img :src="sendLogo" alt class="blogo" />
        <h2 class="text-white">Change the way you tradie in</h2>
        <h1 class="font-weight-bold mb-5 text-white aus-fn">AUSTRALIA</h1>
        <SearchBar />
        <MultiStepForm />
      </div>
      <div class="company-info d-flex f-row">
        <div class="connected d-flex f-col text-white px-5 py-4">
          <h5 class="font-weight-bold">Get Connected With Us</h5>
          <h6>+123 456 789</h6>
        </div>
        <div class="comp-tip d-flex f-col text-white px-5 py-4">
          <h5 class="font-weight-bold">Start earning now</h5>
          <router-link to="/business-register#registerSec">
            <h6 class="text-white">Become a Tradie</h6>
          </router-link>
        </div>
      </div>
    </div>
  </Banner>
</template>

<script>
import SearchBar from "./SearchBar";
import Banner from "../Banner";
import BannerBG from "../../assets/newBannerBG.png";
import BannerLogo from "../../assets/NewLogo.png";
import MultiStepForm from "../MultiStepForm";
export default {
  name: "Hero",
  components: {
    SearchBar,
    Banner,
    MultiStepForm,
  },
  computed: {
    sendMainBG() {
      return BannerBG;
    },
    sendLogo() {
      return BannerLogo;
    },
  },
};
</script>

<style scoped>
.hero-img {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blogo {
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
}
.hero-banner-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 90%;
}
.logo-n-all {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4.5rem;
}
.bot-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--brand);
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bot-overlay h3 {
  color: #fff;
}
.aus-fn {
  font-size: 4.5rem;
  line-height: 2.7rem;
}
.company-info {
  margin-top: 2.5rem;
}
.connected {
  border-right: 1px solid #fff;
}
</style>

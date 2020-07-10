<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Hero />
    <WorkProcess />

    <Banner class="my-5" height="70" :img_url="sendNewbannerTrio">
      <BannerJobs />
    </Banner>
    <BrowseCategory />
    <Testimonials />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
import Banner from "@/components/Banner";
import BannerJobs from "@/components/Home/Banner-JobsCount";
import WorkProcess from "@/components/Home/WorkProcess";
import BrowseCategory from "@/components/Home/BrowseCategory";
import Testimonials from "@/components/Home/Testimonials";
import NewsLetter from "@/components/Home/NewsLetter";
import Footer from "@/components/Footer";
import NewBannerTrio from "@/assets/newBannerTrio.png";

export default {
  name: "Home",
  components: {
    Hero,
    Banner,
    BannerJobs,
    WorkProcess,
    BrowseCategory,
    Testimonials,
    NewsLetter,
    Footer
  },
  computed: {
    sendNewbannerTrio() {
      return NewBannerTrio;
    }
  }
};
</script>

<style scoped></style>

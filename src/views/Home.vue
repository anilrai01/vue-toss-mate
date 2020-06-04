<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Hero />
    <WorkProcess />

    <Banner
      class="mt-5"
      height="35"
      img_url="https://images.unsplash.com/photo-1587407646633-aa1348f0dd9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
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
    Footer,
  },
};
</script>

<style scoped></style>

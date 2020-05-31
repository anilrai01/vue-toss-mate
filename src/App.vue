<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Navbar />
    <Hero />
    <Intro />
    <Banner
      height="35"
      img_url="https://images.unsplash.com/photo-1587407646633-aa1348f0dd9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <BannerJobs />
    </Banner>
    <WorkProcess />
    <BrowseCategory />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import BannerJobs from "./components/Banner-JobsCount";
import WorkProcess from "./components/WorkProcess";
import BrowseCategory from "./components/BrowseCategory";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Intro,
    Banner,
    BannerJobs,
    WorkProcess,
    BrowseCategory
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

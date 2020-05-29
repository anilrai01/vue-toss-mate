<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Navbar />
    <Hero />
    <Intro />
    <Banner />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Banner from "./components/Banner";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Intro,
    Banner
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

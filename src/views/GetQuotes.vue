<template>
  <div id="#get-quote">
    <Banner
      height="50"
      img_url="https://images.unsplash.com/photo-1531235968168-51f35786b2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      class="position-relative"
    >
      <div class="search-quote">
        <h3 class="my-4">You can Search for your required job here!</h3>
        <SearchBarModal />
        <h5 class="mt-4">How can you get the best search result from us ?</h5>
        <h6 class="mb-4">
          Please enter the valid and genuine records so that our search engine
          can provide you with reliable results
        </h6>
      </div>
    </Banner>
    <WorkProcess />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import WorkProcess from "../components/Home/WorkProcess";
import Footer from "../components/Footer";
import SearchBarModal from "../components/GetQuotes/SearchBarModal";

export default {
  name: "GetQuotes",
  components: {
    Banner,
    WorkProcess,
    Footer,
    SearchBarModal
  }
};
</script>

<style scoped>
.search-quote {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-quote h3,
h5 {
  color: #fff;
  font-weight: bold;
}
h6 {
  color: #fff;
}
</style>

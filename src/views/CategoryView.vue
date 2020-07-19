<template>
  <div id="category-view">
    <Banner
      height="50"
      img_url="https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <div class="place-bar">
        <SearchBar />
        <MultiStepForm />
      </div>
    </Banner>
    <mdb-container>
      <h1 class="text-center py-5">{{ this.$route.params.name }}</h1>
    </mdb-container>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import SearchBar from "../components/Home/SearchBar";
import MultiStepForm from "../components/MultiStepForm";
import { mdbContainer } from "mdbvue";
export default {
  name: "CategoryView",
  components: {
    mdbContainer,
    Banner,
    SearchBar,
    MultiStepForm,
  },
  computed: {
    propsName() {
      return this.$route.params.name;
    },
  },
};
</script>

<style scoped>
.place-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

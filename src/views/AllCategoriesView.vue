<template>
  <div id="allCatView">
    <Banner
      height="70"
      img_url="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
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

    <mdb-container class="my-5">
      <h1 class="d-block font-weight-bold">These are the list of categories</h1>
      <div class="catCont my-3">
        <div class="catHead my-5" v-for="(list, index) in alphabeticalData" :key="index">
          <h2 class="font-weight-bold text-grey">{{list.title}}</h2>

          <div class="catList my-3">
            <p class="cList d-in" v-for="(iList, index) in list.links" :key="index">{{iList}}</p>
          </div>
        </div>
      </div>
    </mdb-container>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import SearchBarModal from "../components/GetQuotes/SearchBarModal";
import { mdbContainer } from "mdbvue";
import { mapGetters } from "vuex";

export default {
  name: "AllCategoryView",
  components: {
    Banner,
    SearchBarModal,
    mdbContainer
  },

  computed: {
    ...mapGetters(["getDropdown2"]),
    alphabeticalData() {
      let test = this.getDropdown2.slice().sort();
      return test;
    }
  }
};
</script>

<style scoped>
.search-quote {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-quote * {
  z-index: 10 !important;
}
.search-quote h3,
h5 {
  color: #fff;
  font-weight: bold;
}
h6 {
  color: #fff;
}
.catCont {
  max-width: 100%;
  height: auto;
  overflow-x: hidden;
}
.catHead {
  display: flex;
  flex-direction: column;
}
.catList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 1rem;
}
</style>
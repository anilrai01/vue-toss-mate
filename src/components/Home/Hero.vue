<template>
  <Banner
    height="60"
    img_url="https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
    class="hero-img"
    light
  >
    <SearchBar />
    <div class="bot-overlay">
      <h5 class="p-0 m-0 mr-4">
        <mdb-icon icon="briefcase" class="mr-2" />Become a Tradie - Start
        Earning now
      </h5>
      <router-link to="/business-register">
        <mdb-btn
          color="indigo"
          outline="white"
          size="md"
          class="my-0"
          type="submit"
          >Register Now</mdb-btn
        >
      </router-link>
    </div>
  </Banner>
</template>

<script>
import { mdbIcon, mdbBtn } from "mdbvue";
import SearchBar from "./SearchBar";
import Banner from "../Banner";
export default {
  name: "Hero",
  components: {
    mdbIcon,
    mdbBtn,
    SearchBar,
    Banner,
  },
};
</script>

<style scoped>
.hero-img {
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>

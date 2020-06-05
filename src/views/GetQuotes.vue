<template>
  <div id="#get-quotes">
    <Banner
      height="50"
      img_url="https://images.unsplash.com/photo-1531235968168-51f35786b2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <div class="search-quote">
        <h3 class="my-4">You can Search for your required job here!</h3>
        <form>
          <SearchList width="80" :filterArray="filterArray" />
          <input
            type="text"
            class="form-controls form-i"
            placeholder="Enter your trade or business name..."
            v-model="business"
          />
          <button class="search-btn cus-btn">Go</button>
        </form>
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
import SearchList from "../components/SearchList";
import { mapGetters } from "vuex";
export default {
  name: "GetQuotes",
  components: {
    Banner,
    WorkProcess,
    Footer,
    SearchList
  },
  data() {
    return {
      business: "",
      filterArray: []
    };
  },
  computed: {
    ...mapGetters(["getDropdown"])
  },
  watch: {
    business() {
      if (this.business !== null && this.business !== "") {
        this.filterArray = this.getDropdown.filter(el =>
          el.includes(this.business)
        );
      } else if (this.business == "") {
        this.filterArray = [];
      }
      // console.log(this.filterArray);
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
.search-quote h3,
h5 {
  color: #fff;
  font-weight: bold;
}
h6 {
  color: #fff;
}
form {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 70%;
}
form input {
  width: 80%;
  padding: 1rem;
}
.search-btn {
  width: 20%;
  outline: none;
  border: none;
}
</style>

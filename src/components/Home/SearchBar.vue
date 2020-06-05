<template>
  <div class="overlay-form">
    <Modals
      :show="showModal"
      message="Please enter valid Business details and Postcode"
      @visibleOff="offVisible"
    />
    <SearchList width="65" :filterArray="filterArray" @setVal="setBusiness" />

    <input
      type="text"
      class="form-controls form-i"
      placeholder="Enter your trade or business name..."
      v-model="business"
    />
    <input
      type="text"
      class="form-controls form-ii"
      placeholder="Enter postcode"
      v-model="postCode"
    />
    <button class="search-btn text-center" @click="handleSubmit">Go</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchList from "../SearchList";
import Modals from "../Modals";

export default {
  name: "SearchBar",
  components: {
    Modals,
    SearchList
  },
  data() {
    return {
      business: "",
      postCode: "",
      showModal: false,
      filterArray: [],
      enableFilter: true
    };
  },

  computed: {
    ...mapGetters(["getQuotes", "getDropdown"])
  },
  methods: {
    ...mapActions(["setQuotes"]),
    handleSubmit() {
      if (
        this.business !== null &&
        this.business !== "" &&
        this.postCode !== null &&
        this.postCode !== ""
      ) {
        this.setQuotes({ business: this.business, postCode: this.postCode });
        this.$router.push("/get-quotes");
      } else {
        // alert("Please enter valid Business details and Postcode");
        this.showModal = true;
        // console.log(this.showModal);
      }
    },
    offVisible() {
      this.showModal = false;
    },
    setBusiness(par) {
      this.business = par;
      this.filterArray = [];
      this.enableFilter = false;
    }
  },
  watch: {
    business() {
      if (this.business !== null && this.business !== "" && this.enableFilter) {
        this.filterArray = this.getDropdown.filter(el =>
          el.includes(this.business)
        );
      } else if (this.business == "") {
        this.filterArray = [];
      } else {
        this.enableFilter = true;
      }
      // console.log(this.filterArray);
    }
  },
  created() {
    this.enableFilter = true;
  }
};
</script>

<style scoped>
.overlay-form {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: row;
  width: 60%;
  border: 20px solid rgba(0, 0, 0, 0.6);
}
.form-controls {
  padding: 1rem 1.5rem;
}
.form-i {
  width: 65%;
}
.form-ii {
  width: 25%;
}
.search-btn {
  width: 10%;
  background: var(--brand) !important;
  padding: 0 2.5rem;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
}
</style>

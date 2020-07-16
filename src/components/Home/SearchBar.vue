<template>
  <div class="overlay-form">
    <Modals :show="getQuoteValidationStat" messageTitle="Alert!" @visibleOff="offVisible">
      <h2 slot="header" class="text-danger">Alert !</h2>
      <h4 slot="body">Please enter valid Business details and Postcode</h4>
    </Modals>
    <SearchList width="60" :filterArray="filterArray" @setVal="setBusiness" :keyword="business" />

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
    <button class="search-btn text-center" @click="handleSubmit">Search</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchList from "../SearchList";
import Modals from "../Modals";

export default {
  name: "SearchBar",
  components: {
    SearchList,
    Modals
  },
  data() {
    return {
      business: "",
      postCode: "",
      filterArray: [],
      enableFilter: true
    };
  },

  computed: {
    ...mapGetters(["getQuotes", "getDropdown", "getQuoteValidationStat"])
  },
  methods: {
    ...mapActions(["setQuotes", "setQuoteValidationStat"]),
    handleSubmit() {
      if (
        this.business !== null &&
        this.business !== "" &&
        this.postCode !== null &&
        this.postCode !== ""
      ) {
        this.setQuotes({ business: this.business, postCode: this.postCode });
        // console.log("Business:", this.getQuotes.business);
        // console.log("PostCode:", this.getQuotes.postCode);
        this.$router.push("/get-quotes");
      } else {
        // alert("Please enter valid Business details and Postcode");
        // console.log("Fuck you Vue js");
        this.setQuoteValidationStat(true);
      }
    },
    offVisible() {
      this.setQuoteValidationStat(false);
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
  }
};
</script>

<style scoped>
.overlay-form {
  position: relative;
  /* z-index: 55 !important; */
  display: flex;
  flex-direction: row;
  width: 60%;
  /* border: 20px solid rgba(0, 0, 0, 0.6); */
}
.form-controls {
  padding: 0.7rem 1.5rem;
}
.form-i {
  width: 55%;
}
.form-ii {
  width: 25%;
}
.search-btn {
  width: 20%;
  background: var(--brandL2) !important;
  padding: 0 2.5rem;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-footer {
  border: 0 !important;
}
.modal-header {
  border: 0;
}
.modal-body {
  border: 0;
}
</style>

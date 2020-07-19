<template>
  <div class="overlay-form">
    <div
      class="type-i"
      v-if="
        this.$route.name == 'Home' || this.$route.name == 'AllCategoriesView'
      "
    >
      <Modals
        :show="getQuoteValidationStat"
        messageTitle="Alert!"
        @visibleOff="offVisible"
      >
        <h2 slot="header" class="text-danger">Alert !</h2>
        <h4 slot="body">Please enter valid Business details and Postcode</h4>
      </Modals>
      <SearchList
        width="55"
        :filterArray="filterArray"
        @setVal="setBusiness"
        :keyword="business"
      />

      <input
        type="text"
        class="form-controls type-i-form-i"
        placeholder="Enter your trade or business name..."
        v-model="business"
      />
      <input
        type="text"
        class="form-controls type-i-form-ii"
        placeholder="Enter postcode"
        v-model="postCode"
      />
      <button class="search-btn text-center" @click="handleSubmit">
        Search
      </button>
    </div>
    <div class="type-ii" v-if="this.$route.name == 'CategoriesView'">
      <Modals
        :show="getQuoteValidationStat"
        messageTitle="Alert!"
        @visibleOff="offVisible"
      >
        <h2 slot="header" class="text-danger">Alert !</h2>
        <h4 slot="body">Please enter valid Business details and Postcode</h4>
      </Modals>
      <input
        type="text"
        class="form-controls type-ii-form-i"
        placeholder="Enter postcode"
        v-model="postCode"
      />
      <button class="search-btn text-center" @click="handleSubmit">
        Go
      </button>
    </div>
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
    Modals,
  },
  data() {
    return {
      business: "",
      postCode: "",
      filterArray: [],
      enableFilter: true,
    };
  },

  computed: {
    ...mapGetters(["getQuotes", "getDropdown", "getQuoteValidationStat"]),
  },
  methods: {
    ...mapActions([
      "setQuotes",
      "setQuoteValidationStat",
      "setNmultiStepFormDispStat",
    ]),
    handleSubmit() {
      if (
        this.business !== null &&
        this.business !== "" &&
        this.postCode !== null &&
        this.postCode !== "" &&
        this.getDropdown.includes(this.business)
      ) {
        this.setQuotes({ business: this.business, postCode: this.postCode });
        this.setNmultiStepFormDispStat(true);
        // setTimeout(() => alert(this.getQuotes.business), 1000);
      } else {
        // alert("Please enter valid Business details and Postcode");
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
    },
  },
  watch: {
    business() {
      if (this.business !== null && this.business !== "" && this.enableFilter) {
        this.filterArray = this.getDropdown.filter((el) =>
          el.includes(this.business)
        );
      } else if (this.business == "") {
        this.filterArray = [];
      } else {
        this.enableFilter = true;
      }
      // console.log(this.filterArray);
    },
  },
  mounted() {
    this.business = this.getQuotes.business;
    this.postCode = this.getQuotes.postCode;
  },
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
.type-i,
.type-ii {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.form-controls {
  padding: 0.7rem 1.5rem;
}
.type-i-form-i {
  width: 55%;
}
.type-i-form-ii {
  width: 25%;
}
.type-i .search-btn,
.type-ii .search-btn {
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

.type-ii-form-i {
  width: 80%;
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

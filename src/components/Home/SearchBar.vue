<template>
  <div class="overlay-form">
    <Modals
      :show="showModal"
      message="Please enter valid Business details and Postcode"
      @visibleOff="offVisible"
    />
    <div class="list-dir" v-if="filterArray">
      <div class="list-dir-list" v-for="(list, index) in filterArray" :key="index">{{list}}</div>
    </div>

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
    <button class="search-btn" @click="handleSubmit">Go</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Modals from "../Modals";

export default {
  name: "SearchBar",
  components: {
    Modals
  },
  data() {
    return {
      business: "",
      postCode: "",
      showModal: false,
      filterArray: []
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
    greet() {
      console.log(this.business);
    }
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
.list-dir {
  position: absolute;
  top: 100%;
  left: 0;
  /* transform: translateY(50%); */
  width: 65%;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.list-dir-list {
  cursor: pointer;
  width: 100%;
  padding: 1rem;
}
.list-dir-list:hover {
  background: #eee;
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
}
</style>

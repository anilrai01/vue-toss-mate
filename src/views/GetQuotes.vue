<template>
  <div id="#get-quotes">
    <Modals :show="alertModal" @visibleOff="alertOff">
      <h2 slot="header" class="text-danger">Alert !</h2>
      <h4 slot="body">Please enter valid Business details from the list</h4>
    </Modals>
    <Modals :show="showModal" @visibleOff="offVisible" quoteModel>
      <!-- Modal Body  -->
      <div class="p-2" slot="body">
        <mdb-progress :value="progress" :height="progressBarHeight" class="m-0 p-0 cus-progress" />
        <!-- Stage 1 -->
        <!-- <div class="m-form stage1" v-show="progress == 25">
          <div class="options">
            <h3>Your Job</h3>
            <input type="text" v-model="business" disabled class="form-control w-full" />
            <h6 class="my-3 text-dark">Click on Next to continue</h6>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </div>-->
        <!-- Stage 1 -->
        <form
          class="m-form stage2"
          v-show="progress == progressValue"
          @submit.prevent="increaseProgress"
        >
          <div class="options py-4">
            <h3 class="text-center">Where do you want your job done?</h3>
            <input
              type="text"
              name="postcode"
              id="postcode"
              class="form-control w-full"
              placeholder="Enter your postcode"
              v-model="postcode"
              required="required"
            />
          </div>
          <BtnGroup @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 2 -->
        <div class="m-form stage3" v-show="progress == 2*progressValue">
          <div class="options my-4">
            <h3
              class="text-center"
            >{{Math.round(Math.random() * (58 - 20)) + 20}} tradie available near you</h3>
            <h6
              class="text-center text-dark"
            >Please go through few more questions so we can find the best tradie for you</h6>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </div>
        <!-- Stage 3 -->
        <form class="m-form stage4" v-show="progress == 3*progressValue" @submit.prevent>
          <div class="options">
            <h3 class="text-center mb-4">When do you need the work to start?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="startTime"
                id="Emergency"
                value="emergency"
                v-model="jobDetails.startTime"
              />
              <label class="custom-control-label" for="Emergency">Emergency</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="startTime"
                id="ASAP"
                value="asap"
                v-model="jobDetails.startTime"
              />
              <label class="custom-control-label" for="ASAP">ASAP</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="startTime"
                id="Next few days"
                value="next-few-days"
                v-model="jobDetails.startTime"
              />
              <label class="custom-control-label" for="Next few days">Next few days</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="startTime"
                id="I'm Flexible"
                value="flexible"
                v-model="jobDetails.startTime"
              />
              <label class="custom-control-label" for="I'm Flexible">I'm Flexible</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="startTime"
                id="Few Months"
                value="few-months"
                v-model="jobDetails.startTime"
              />
              <label class="custom-control-label" for="Few Months">Few Months</label>
            </div>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 4 -->
        <form class="m-form" v-show="progress == 4*progressValue" @submit.prevent>
          <div class="options">
            <h3>Describe something about your job?</h3>

            <textarea
              name="jobDesc"
              id="jobDesc"
              placeholder="Any notes about your job reuirements ?"
              cols="30"
              rows="10"
              class="form-control"
              v-model="jobDetails.jobDesc"
            ></textarea>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 5 -->
        <form class="m-form" v-show="progress== 5*progressValue" @submit.prevent="finalSubmit">
          <div class="options">
            <h3>Please provide us your details for further procedure?</h3>
            <div class="form-group">
              <label for="u-name">Full Name *</label>
              <input type="text" class="form-control w-full" placeholder="Your Full Name" required />
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input
                type="email"
                class="form-control w-full"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div class="form-group">
              <label for="contact">Contact Details*</label>
              <input
                type="number"
                class="form-control w-full"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <h6
              class="text-dark text-center my-5"
            >By clicking agree and continue you agree to ToosMate policy and agreement !</h6>
          </div>
          <div class="btn-groupp">
            <button class="cus-btn-outline p-2 px-4 mr-4" @click="decreaseProgress">No thanks</button>

            <button class="cus-btn p-2 px-4 mx-auto">Agree and Continue</button>
          </div>
        </form>
      </div>
      <!-- EOF Modal Body  -->
    </Modals>
    <Banner
      height="50"
      img_url="https://images.unsplash.com/photo-1531235968168-51f35786b2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <div class="search-quote">
        <h3 class="my-4">You can Search for your required job here!</h3>
        <form @submit.prevent="handleSubmit">
          <SearchList
            width="80"
            :filterArray="filterArray"
            @setVal="setBusiness"
            :keyword="business"
          />

          <input
            type="text"
            class="form-controls form-i"
            placeholder="Enter your trade or business name..."
            v-model="business"
            required
          />
          <button class="search-btn cus-btn" @click="setProgress">Go</button>
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
import Modals from "../components/Modals";
import { mapGetters } from "vuex";
import { mdbProgress } from "mdbvue";
import BtnGroup from "../components/GetQuotes/BtnGroup";
import { mapActions } from "vuex";

export default {
  name: "GetQuotes",
  components: {
    Banner,
    WorkProcess,
    Footer,
    SearchList,
    Modals,
    mdbProgress,
    BtnGroup
  },
  data() {
    return {
      business: "",
      postcode: "",

      jobDetails: {
        startTime: "flexible",
        jobStatus: "planning",
        jobDesc: "",
        personal: {
          name: "",
          email: "",
          contact: ""
        }
      },

      filterArray: [],
      enableFilter: true,
      showModal: false,
      modalHeight: 60,
      alertModal: false,
      progress: 20,
      progressValue: 20,
      progressBarHeight: 10
    };
  },
  computed: {
    ...mapGetters(["getDropdown", "getQuotes"])
  },
  methods: {
    ...mapActions(["setJobDetails", "setQuotes"]),
    setBusiness(par) {
      this.business = par;
      this.filterArray = [];
      this.enableFilter = false;
    },
    handleSubmit() {
      if (
        this.business !== "" &&
        this.business !== null &&
        this.getDropdown.includes(this.business)
      ) {
        this.showModal = true;
      } else if (!this.getDropdown.includes(this.business)) {
        this.alertModal = true;
      }
    },
    finalSubmit() {
      this.setJobDetails(this.jobDetails);
      this.setQuotes({ business: this.business, postCode: this.postcode });
      this.$router.push("/profile");
    },
    alertOff() {
      this.alertModal = false;
    },
    offVisible() {
      this.showModal = false;
    },
    increaseProgress() {
      if (this.progress < 100) this.progress += this.progressValue;
      // console.log("GQ Inc: ", this.progress);
    },
    decreaseProgress() {
      if (this.progress > this.progressValue)
        this.progress -= this.progressValue;
      // console.log("GQ Dec: ", this.progress);
    },
    setProgress() {
      if (this.business !== "" && this.postcode == "") {
        this.progress = 20;
      } else if (this.business !== "" && this.postcode !== "") {
        this.progress = 40;
      }
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
  mounted() {
    this.business = this.getQuotes.business;
    this.postcode = this.getQuotes.postCode;

    if (this.getQuotes.business !== "") {
      this.enableFilter = false;
      this.showModal = true;
    }
    this.setProgress();
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
h3 {
  font-weight: bold;
}
.m-form {
  width: 100%;
  height: 60vh;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.w-full {
  width: 100%;
}
.custom-control {
  padding: 1rem 2rem;
  border-top: 1px solid #eee;
}
.options {
  height: calc(100% - 3rem);
  overflow-y: auto;
}
.w-full {
  width: 98%;
}
</style>

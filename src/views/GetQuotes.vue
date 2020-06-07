<template>
  <div id="#get-quotes">
    <Modals :show="alertModal" @visibleOff="alertOff">
      <h2 slot="header" class="text-danger">Alert !</h2>
      <h4 slot="body">Please enter valid Business details from the list</h4>
    </Modals>
    <Modals :show="showModal" @visibleOff="offVisible" quoteModel>
      <!-- Modal Body  -->
      <div class="p-3" slot="body">
        <mdb-progress :value="progress" :height="progressBarHeight" class="m-0 p-0 cus-progress" />
        <!-- Stage 1 -->
        <div class="m-form stage1" v-show="progress == 10">
          <div>
            <h3>Your Job</h3>
            <input type="text" v-model="business" disabled class="form-control w-full" />
            <h6 class="my-3 text-dark">Click on Next to continue</h6>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </div>
        <!-- Stage 2 -->
        <form class="m-form stage2" v-show="progress == 20" @submit.prevent="increaseProgress">
          <div class="py-4">
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
        <!-- Stage 3 -->
        <div class="m-form stage3" v-show="progress == 30">
          <div class="top my-4">
            <h3
              class="text-center"
            >{{Math.round(Math.random() * (58 - 20)) + 20}} tradie available near you</h3>
            <h6
              class="text-center text-dark"
            >Please go through few more questions so we can find the best tradie for you</h6>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </div>
        <!-- Stage 4 -->
        <form class="m-form stage4" v-show="progress == 40" @submit.prevent>
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
        <!-- Stage 5 -->
        <form class="m-form" v-show="progress == 50" @submit.prevent>
          <div class="options">
            <h3 class="text-center mb-4">Type of {{business}} job?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="jobType"
                id="replace"
                value="replace"
                v-model="jobDetails.jobType"
              />
              <label class="custom-control-label" for="replace">Replace Existing Tiles</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="jobType"
                id="repair"
                value="repair"
                v-model="jobDetails.jobType"
              />
              <label class="custom-control-label" for="repair">Repair Existing</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="jobType"
                id="lay-new"
                value="lay-new"
                v-model="jobDetails.jobType"
              />
              <label class="custom-control-label" for="lay-new">Lay new tiles</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="jobType"
                id="other"
                value="others"
                v-model="jobDetails.jobType"
              />
              <label class="custom-control-label" for="other">Others</label>
            </div>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- STAGE 6 -->
        <form class="m-form" v-show="progress == 60" @submit.prevent>
          <div class="options">
            <h3>Have you purchased the {{business}} yet ?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="purchase"
                id="yes"
                value="yes"
                v-model="jobDetails.purchaseEquip"
              />
              <label class="custom-control-label" for="yes">Yes</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="purchase"
                id="no"
                value="no"
                v-model="jobDetails.purchaseEquip"
              />
              <label class="custom-control-label" for="no">No</label>
            </div>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- STAGE 7 -->
        <form class="m-form" v-show="progress == 70" @submit.prevent>
          <div class="options">
            <h3>Which area do you need to {{business}} ?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="areaOfTask"
                id="Floor"
                value="Floor"
                v-model="jobDetails.areaOfTask"
              />
              <label class="custom-control-label" for="Floor">Floor</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="areaOfTask"
                id="shower/bath"
                value="shower/bath"
                v-model="jobDetails.areaOfTask"
              />
              <label class="custom-control-label" for="shower/bath">Shower/Bath</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="areaOfTask"
                id="wall"
                value="wall"
                v-model="jobDetails.areaOfTask"
                checked
              />
              <label class="custom-control-label" for="wall">Wall</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="areaOfTask"
                id="splashBack"
                value="splashBack"
                v-model="jobDetails.areaOfTask"
              />
              <label class="custom-control-label" for="splashBack">SplashBack</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="areaOfTask"
                id="outdoor"
                value="outdoor"
                v-model="jobDetails.areaOfTask"
              />
              <label class="custom-control-label" for="outdoor">Outdoor</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="areaOfTask"
                id="Otherr"
                value="Otherr"
                v-model="jobDetails.areaOfTask"
              />
              <label class="custom-control-label" for="Otherr">Others</label>
            </div>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 8 -->
        <form class="m-form" v-show="progress == 80" @submit.prevent>
          <div class="options">
            <h3>What is the rough size in sqm?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="roughSize"
                id="less-5"
                value="less-5"
                v-model="jobDetails.roughSize"
              />
              <label class="custom-control-label" for="less-5">Less than 5 Sqm</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="roughSize"
                id="5-20"
                value="5-20"
                v-model="jobDetails.roughSize"
              />
              <label class="custom-control-label" for="5-20">5 - 20 Sqm</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="roughSize"
                id="20-50"
                value="20-50"
                v-model="jobDetails.roughSize"
              />
              <label class="custom-control-label" for="20-50">20 - 50 Sqm</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="roughSize"
                id="more-50"
                value="more-50"
                v-model="jobDetails.roughSize"
              />
              <label class="custom-control-label" for="more-50">More than 50 Sqm</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="roughSize"
                id="NotSure"
                value="NotSure"
                v-model="jobDetails.roughSize"
              />
              <label class="custom-control-label" for="NotSure">NotSure</label>
            </div>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 9 -->
        <form class="m-form" v-show="progress == 90" @submit.prevent>
          <div class="options">
            <h3>What is the status of your job?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="jobStatus"
                id="ready-to-hire"
                value="ready-to-hire"
                v-model="jobDetails.jobStatus"
              />
              <label class="custom-control-label" for="ready-to-hire">Ready to hire</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="jobStatus"
                id="planning"
                value="planning"
                v-model="jobDetails.jobStatus"
              />
              <label class="custom-control-label" for="planning">Planning and Budgeting</label>
            </div>
          </div>
          <BtnGroup @next="increaseProgress" @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 10 -->
        <form class="m-form" v-show="progress==100" @submit.prevent>
          <div class="options">
            <h3>What is your budget?</h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="budget"
                id="u-500"
                value="u-500"
                v-model="jobDetails.budget"
              />
              <label class="custom-control-label" for="u-500">Under $500</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="budget"
                id="$500 - $2000"
                value="500-2000"
                v-model="jobDetails.budget"
              />
              <label class="custom-control-label" for="500-2000">$500 - $2000</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="budget"
                id="2000-5000"
                value="2000-5000"
                v-model="jobDetails.budget"
              />
              <label class="custom-control-label" for="2000-5000">$2000 - $5000</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="budget"
                id="m-5000"
                value="m-5000"
                v-model="jobDetails.budget"
              />
              <label class="custom-control-label" for="m-5000">More than $5000</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="budget"
                id="not-sure"
                value="not-sure"
                v-model="jobDetails.budget"
              />
              <label class="custom-control-label" for="not-sure">Not Sure</label>
            </div>

            <h6
              class="text-dark text-center my-5"
            >By clicking agree and continue you agree to ToosMate policy and agreement !</h6>
          </div>
          <div class="btn-groupp">
            <button class="cus-btn-outline p-2 px-4 mr-4" @click="decreaseProgress">No thanks</button>

            <button class="cus-btn p-2 px-4 mx-auto" @click="redirectPage">Agree and Continue</button>
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
        jobType: "others",
        purchaseEquip: "no",
        areaOfTask: "wall",
        roughSize: "NotSure",
        budget: "not-sure",
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
      progress: 10,
      progressBarHeight: 10
    };
  },
  computed: {
    ...mapGetters(["getDropdown", "getQuotes"])
  },
  methods: {
    ...mapActions(["setJobDetails"]),
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
    alertOff() {
      this.alertModal = false;
    },
    offVisible() {
      this.showModal = false;
    },
    increaseProgress() {
      if (this.progress < 100) this.progress += 10;
      // console.log("GQ Inc: ", this.progress);
    },
    decreaseProgress() {
      if (this.progress > 10) this.progress -= 10;
      // console.log("GQ Dec: ", this.progress);
    },
    redirectPage() {
      this.setJobDetails(this.jobDetails);
      this.$router.push("/profile/12");
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
    this.business = this.getQuotes.business;
    if (this.getQuotes.business !== "") {
      this.enableFilter = false;
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
</style>

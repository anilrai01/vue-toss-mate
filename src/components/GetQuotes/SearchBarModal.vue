<template>
  <div id="search-bar-modal">
    <Modals :show="getQuoteValidationStat" @visibleOff="alertOff" class="mt-5">
      <h2 slot="header" class="text-danger">Alert !</h2>
      <h4 slot="body">Please enter valid Business details from the list</h4>
    </Modals>
    <Modals :show="getMFormDispStat" @visibleOff="offVisible" quoteModel>
      <!-- Modal Body  -->
      <div class="p-2" slot="body">
        <mdb-progress
          :value="progress"
          :height="progressBarHeight"
          class="m-0 p-0 cus-progress"
        />
        <!-- Stage Prime -->
        <!-- <div class="m-form stage1" v-show="progress == progressValue">
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
            <h4 class="font-weight-bold mb-3">
              Please fill up the basic job details
            </h4>
            <div class="form-group">
              <label for="postcode" class="font-weight-bold text-grey"
                >Where do you want your job done?</label
              >
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

            <div class="form-group mt-4">
              <p class="m-0 font-weight-bold text-grey">
                Please specify your job type
              </p>
              <!-- Group of default radios - option 1 -->
              <div class="custom-control custom-radio normal-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="quotes"
                  name="jobType"
                  value="Quote"
                  v-model="jobDetails.jobType"
                  required
                />
                <label class="custom-control-label text-muted" for="quotes"
                  >Quotes</label
                >
              </div>

              <!-- Group of default radios - option 2 -->
              <div class="custom-control custom-radio normal-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="offer"
                  name="jobType"
                  value="Offer"
                  v-model="jobDetails.jobType"
                  required
                />
                <label class="custom-control-label text-muted" for="offer"
                  >Offer</label
                >
              </div>
            </div>

            <div class="form-group mt-3" v-if="jobDetails.jobType == 'Offer'">
              <label for="budget" class="font-weight-bold text-grey"
                >What is your budget for the task?</label
              >
              <!-- <input
                type="text"
                class="form-control w-full"
                v-model="jobDetails.jobBudget"
                id="budget"
                required
              />-->
              <mdb-input
                basic
                class="mb-3 w-full"
                id="budget"
                v-model="jobDetails.jobBudget"
              >
                <span class="input-group-text" slot="prepend">$</span>
                <span class="input-group-text" slot="append">.00</span>
              </mdb-input>
            </div>
          </div>

          <BtnGroup @handlePrev="decreaseProgress" :stat="progress" />
        </form>
        <!-- Stage 2 -->
        <div class="m-form stage3" v-show="progress == 2 * progressValue">
          <div class="options my-4">
            <h3 class="text-center">
              {{ Math.round(Math.random() * (58 - 20)) + 20 }} tradie available
              near you
            </h3>
            <h6 class="text-center text-dark">
              Please go through few more questions so we can find the best
              tradie for you
            </h6>
          </div>
          <BtnGroup
            @next="increaseProgress"
            @handlePrev="decreaseProgress"
            :stat="progress"
          />
        </div>
        <!-- Stage 3 -->
        <form
          class="m-form stage4"
          v-show="progress == 3 * progressValue"
          @submit.prevent
        >
          <div class="options">
            <h3 class="text-center mb-4">
              When do you need the work to start?
            </h3>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                name="startTime"
                id="Emergency"
                value="emergency"
                v-model="jobDetails.startTime"
              />
              <label class="custom-control-label" for="Emergency"
                >Emergency</label
              >
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
              <label class="custom-control-label" for="Next few days"
                >Next few days</label
              >
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
              <label class="custom-control-label" for="I'm Flexible"
                >I'm Flexible</label
              >
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
              <label class="custom-control-label" for="Few Months"
                >Few Months</label
              >
            </div>
          </div>
          <BtnGroup
            @next="increaseProgress"
            @handlePrev="decreaseProgress"
            :stat="progress"
          />
        </form>
        <!-- Stage 4 -->
        <form
          class="m-form"
          v-show="progress == 4 * progressValue"
          @submit.prevent
        >
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
          <BtnGroup
            @next="increaseProgress"
            @handlePrev="decreaseProgress"
            :stat="progress"
          />
        </form>
        <!-- Stage 5 -->
        <form
          class="m-form"
          v-show="progress == 5 * progressValue"
          @submit.prevent="finalSubmit"
        >
          <div class="options">
            <h3>Please provide us your details for further procedure?</h3>
            <div class="form-group">
              <label for="u-name">Full Name *</label>
              <input
                type="text"
                class="form-control w-full"
                placeholder="Your Full Name"
                required
                v-model="jobDetails.personal.name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input
                type="email"
                class="form-control w-full"
                placeholder="Your Email Address"
                v-model="jobDetails.personal.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="contact">Contact Details*</label>
              <input
                type="number"
                class="form-control w-full"
                placeholder="Enter your phone number"
                v-model="jobDetails.personal.contact"
                required
              />
            </div>
            <h6 class="text-dark text-center my-5">
              By clicking agree and continue you agree to ToosMate policy and
              agreement !
            </h6>
          </div>
          <div class="btn-groupp">
            <button
              class="cus-btn-outline p-2 px-4 mr-4"
              @click="decreaseProgress"
            >
              No thanks
            </button>

            <button class="cus-btn p-2 px-4 mx-auto">Agree and Continue</button>
          </div>
        </form>
      </div>
      <!-- EOF Modal Body  -->
    </Modals>

    <form
      @submit.prevent="handleBusinessSubmit"
      v-if="
        this.$route.name == 'GetQuotes' ||
          this.$route.name == 'AllCategoriesView'
      "
    >
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

    <form
      @submit.prevent="handlePostCodeSubmit"
      v-if="this.$route.name == 'CategoriesView'"
    >
      <!-- <SearchList width="80" :filterArray="filterArray" @setVal="setBusiness" :keyword="business" /> -->

      <input
        type="text"
        class="form-controls form-i"
        placeholder="Enter your Postcode..."
        v-model="postcode"
        required
      />
      <button class="search-btn cus-btn" @click="setProgress">Go</button>
    </form>
  </div>
</template>

<script>
import Modals from "../Modals";
import { mdbInput, mdbProgress } from "mdbvue";
import BtnGroup from "./BtnGroup";
import { mapGetters, mapActions } from "vuex";
import SearchList from "../SearchList";

export default {
  name: "SearchbarModal",
  components: {
    Modals,
    mdbProgress,
    BtnGroup,
    SearchList,
    mdbInput,
  },
  props: {
    url_name: {
      type: String,
    },
  },
  data() {
    return {
      business: "",
      postcode: "",

      jobDetails: {
        jobType: "",
        jobBudget: "",
        startTime: "flexible",
        jobStatus: "planning",
        jobDesc: "",
        personal: {
          name: "",
          email: "",
          contact: "",
        },
      },

      filterArray: [],
      enableFilter: true,
      modalHeight: 60,
      progress: 20,
      progressValue: 20,
      progressBarHeight: 10,
    };
  },
  computed: {
    ...mapGetters([
      "getDropdown",
      "getQuotes",
      "getQuoteValidationStat",
      "getMFormDispStat",
    ]),
  },
  methods: {
    ...mapActions([
      "setJobDetails",
      "setQuotes",
      "setQuoteValidationStat",
      "setMFormDispStat",
    ]),
    setBusiness(par) {
      this.business = par;
      this.filterArray = [];
      this.enableFilter = false;
    },
    handleBusinessSubmit() {
      if (
        this.business !== "" &&
        this.business !== null &&
        this.getDropdown.includes(this.business)
      ) {
        this.setMFormDispStat(true);
      } else if (!this.getDropdown.includes(this.business)) {
        this.setQuoteValidationStat(true);
      }
    },
    handlePostCodeSubmit() {
      this.business = this.url_name;

      this.setMFormDispStat(true);
    },
    resetVal() {
      this.business = "";
      this.postcode = "";
      this.jobDetails.startTime = "";
      this.jobDetails.jobStatus = "";
      this.jobDetails.jobDesc = "";
      this.jobDetails.personal.name = "";
      this.jobDetails.personal.email = "";
      this.jobDetails.personal.contact = "";
    },
    finalSubmit() {
      this.setJobDetails(this.jobDetails);
      this.setQuotes({ business: this.business, postCode: this.postcode });
      this.resetVal();
      this.$router.push("/profile");
    },
    alertOff() {
      this.setQuoteValidationStat(false);
    },
    offVisible() {
      this.setMFormDispStat(false);
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
        this.progress = 20;
      }
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
    this.postcode = this.getQuotes.postCode;

    if (this.getQuotes.business !== "") {
      this.enableFilter = false;
      this.setMFormDispStat(true);
    }
    this.setProgress();
  },
};
</script>

<style scoped>
#search-bar-modal {
  position: relative !important;
  /* z-index: 55 !important; */
  width: 70%;
}
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
.normal-radio {
  border: none;
  padding: 0.3rem 2rem;
}
.options {
  height: calc(100% - 3rem);
  overflow-y: auto;
}
.w-full {
  width: 98%;
}
</style>

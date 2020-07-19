<template>
  <div>
    <Modals
      :show="getNmultiStepFormDispStat"
      @visibleOff="offVisible"
      quoteModel
    >
      <div class="msf" slot="body">
        <step-progression
          :steps="steps"
          :currentStep="currentStep"
          :currentStepColor="currentStepColor"
          :defaultColor="defaultColor"
        />
        <!-- Stem 1 -->
        <form
          class="m-form stage2"
          v-if="currentStep === 1"
          @submit.prevent="() => increaseSteps(currentStep, steps)"
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

          <!-- <BtnGroup prevDisable /> -->
          <button
            v-if="currentStep < steps"
            class="btn cus-btn continue"
            type="submit"
          >
            Continue
          </button>
        </form>

        <!-- Step 2 -->
        <form
          class="m-form stage4"
          v-if="currentStep === 2"
          @submit.prevent="() => increaseSteps(currentStep, steps)"
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
          <button
            v-if="currentStep < steps"
            class="btn cus-btn continue"
            type="submit"
          >
            Continue
          </button>
        </form>
        <!-- Step 3 -->
        <form
          class="m-form"
          v-if="currentStep === 3"
          @submit.prevent="() => increaseSteps(currentStep, steps)"
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
          <button
            v-if="currentStep < steps"
            class="btn cus-btn continue"
            type="submit"
          >
            Continue
          </button>
        </form>
        <!-- Step 4 -->
        <form
          class="m-form"
          v-if="currentStep === 4"
          @submit.prevent="() => redirectProfile()"
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
              <h5 class="text-dark font-weight-bold">
                Do you have an account before?
              </h5>
              <div class="custom-control custom-radio normal-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="yes"
                  name="accBefore"
                  value="yes"
                  v-model="haveAccount"
                  required
                />
                <label class="custom-control-label text-muted" for="yes"
                  >Yes</label
                >
              </div>

              <!-- Group of default radios - option 2 -->
              <div class="custom-control custom-radio normal-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="no"
                  name="accBefore"
                  value="no"
                  v-model="haveAccount"
                  required
                />
                <label class="custom-control-label text-muted" for="no"
                  >No</label
                >
              </div>
            </div>
            <div class="form-group" v-if="haveAccount == 'yes'">
              <label for="u-name">Password *</label>
              <input
                type="password"
                class="form-control w-full"
                placeholder="Enter you password"
                required
                v-model="jobDetails.personal.password"
              />
            </div>
            <div class="form-group" v-if="haveAccount == 'no'">
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
            <!-- <button
              v-if="currentStep == steps"
              class="btn cus-btn-outline continue p-2 px-4 mr-3"
              type="button"
              @click="decreaseSteps(currentStep, steps)"
            >
              Back
            </button> -->
            <button
              v-if="currentStep == steps"
              class="btn cus-btn continue p-2 px-4 mx-auto"
              type="submit"
            >
              Agree and Continue
            </button>
          </div>
        </form>
      </div>
    </Modals>
  </div>
</template>

<script>
import StepProgression from "vue-step-progression";
import { mapGetters, mapActions } from "vuex";
import { mdbInput } from "mdbvue";
// import { mdbProgress, mdbInput } from "mdbvue";
// import BtnGroup from "./GetQuotes/BtnGroup";
import Modals from "./Modals";
export default {
  name: "MultiStepForm",
  components: {
    StepProgression,
    Modals,
    // mdbProgress,
    mdbInput,
    // BtnGroup,
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
          password: "",
          contact: "",
        },
      },

      haveAccount: "no",

      // MultiStepForm
      steps: 4,
      currentStep: 1,
      currentStepColor: "#3c8f1a",
      defaultColor: StepProgression.props.defaultColor.default,
    };
  },
  computed: {
    ...mapGetters(["getNmultiStepFormDispStat", "getQuotes"]),
  },
  methods: {
    ...mapActions(["setNmultiStepFormDispStat", "resetQuotes"]),
    offVisible() {
      this.setNmultiStepFormDispStat(false);
      this.resetQuotes();
    },
    increaseSteps(currentStep, steps) {
      if (currentStep < steps) {
        this.currentStep++;
      } else {
        return;
      }
    },
    decreaseSteps(currentStep, steps) {
      if (currentStep <= steps) {
        this.currentStep--;
      } else {
        this.currentStep = steps;
      }
    },
    redirectProfile() {
      this.$router.push("/profile");
    },
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
.cus-progress {
  background: #ccc;
}
.step-progression-line[data-v-0a5fdaca] {
  background-color: var(--brandL2) !important;
}
</style>

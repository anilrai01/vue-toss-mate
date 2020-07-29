<template>
  <div>
    <div class="task-list my-3 p-3" v-for="task in progressTask" :key="task.id">
      <div class="job-div">
        <div class="job-left">
          <h5 class="font-weight-bold c-brand">{{task.taskName}}</h5>
          <div class="task-details">
            <p class="mr-3">{{task.address + ', ' + task.postCode}}</p>
            <p>Posted {{task.created_date}}</p>
          </div>
          <p class="font-weight-bold p-0 m-0 c-brand">Task Availability</p>
          <p>{{task.taskAvailability}}</p>
          <p class="font-weight-bold p-0 m-0 c-brand">Task Description</p>
          <p>{{task.taskDesc}}</p>
          <p class="font-weight-bold p-0 m-0 c-brand">Task Type</p>
          <p class="text-uppercase">
            {{task.taskType}}
            <span v-if="task.taskType == 'offer'">: $ {{task.taskOffer}}</span>
          </p>
        </div>
        <div class="job-right px-2">
          <div class="jr-top-two">
            <div class="job-r-title">
              <h6 class="p-0 m-0">Activities</h6>
              <p class="p-0 m-0">{{task.taskStatus.toUpperCase()}}</p>
            </div>

            <!-- Floating Modal -->
            <Modal :show="getCsaVisibility" @visibleOff="offVisible" noBtn>
              <h3 slot="header" class="text-brand">Applicant details !</h3>
              <div slot="body" class="my-2">
                <div class="profile-top">
                  <div class="applicant-profile">
                    <div class="img-n-name">
                      <img :src="getCurrentSelectedApplicant.profile" alt="Profile" />
                      <div class="applicantIntro d-flex f-col j-c ml-3">
                        <h5 class="m-0 font-weight-bold text-grey">Posted By</h5>
                        <h6 class="m-0">{{getCurrentSelectedApplicant.name}}</h6>
                      </div>
                    </div>
                    <div class="appli-rating">
                      <h5 class="font-weight-bold">Ratings</h5>
                      <p class="text-center">{{getCurrentSelectedApplicant.rating}} / 5</p>
                    </div>
                  </div>
                  <div class="applicant-details my-5">
                    <h5 class="font-weight-bold">Work Summary</h5>
                    <p>{{getCurrentSelectedApplicant.workSummary}}</p>
                    <h5 class="font-weight-bold">Jobs Completed</h5>
                    <p>{{getCurrentSelectedApplicant.jobsCompleted}}</p>

                    <h5 class="font-weight-bold">Verified</h5>
                    <p>{{getCurrentSelectedApplicant.verified == 'true' ? 'Verified' : 'Not Verified'}}</p>
                    <div class="offer-tag" v-if="getCurrentSelectedApplicant.offeredPrice">
                      <h5 class="font-weight-bold">Offered PriceTag</h5>
                      <p>$ {{getCurrentSelectedApplicant.offeredPrice}}</p>
                    </div>
                  </div>
                  <div class="hire-buttons d-flex j-c a-c" v-if="task.taskStatus !== 'completed'">
                    <button class="cus-btn btn btn-default ripple-parent">Hire</button>
                  </div>
                </div>
              </div>
            </Modal>
            <!-- EOF Floating Model -->
            <div
              class="job-r-applicant my-3 px-1"
              v-if="task.applicant"
              :style="computeGrid([task.applicant.length])"
            >
              <div
                class="jap-avatar"
                v-for="(apc, index) in task.applicant"
                :key="index"
                @click="handleApplicant(apc)"
              >
                <div class="jap-avatar-cont d-flex f-col j-c a-c">
                  <img :src="apc.profile" alt />
                  <span>{{apc.name}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="jr-bot" v-if="task.taskStatus !== 'completed'">
            <button class="btn cus-btn w-100">Verify Work</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../Modals";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Feed",
  components: {
    Modal,
  },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
    };
  },
  props: {
    progressTask: {
      type: Array,
      default: () => [],
    },
    vis: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["getCsaVisibility", "getCurrentSelectedApplicant"]),
  },
  methods: {
    ...mapActions(["setCsaVisibility", "setCurrentSelectedApplicant"]),
    computeGrid(num) {
      if (num === undefined || num === "" || num === null) {
        return "";
      } else if (num >= 8) {
        return `grid-template-columns: repeat(${num}, 3rem)`;
      } else if (num < 8) {
        return `grid-template-columns: repeat(auto-fit, 3rem)`;
      }
    },
    handleApplicant(val) {
      this.setCurrentSelectedApplicant(val);
      this.setCsaVisibility(true);
    },
    offVisible() {
      this.setCsaVisibility(false);
    },
  },
};
</script>

<style scoped>
.task-list {
  background: var(--cream);
  width: 100%;
}
.task-list .task-details {
  display: flex;
  flex-direction: row;
}
.job-div {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.job-left {
  display: flex;
  flex-direction: column;
  width: 65%;
  border-right: 1px solid #ccc;
}
.job-right {
  width: 35%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.job-r-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.job-r-applicant {
  display: grid;
  /* grid-template-columns: repeat(8, minmax(2.8rem, 1fr)); */
  gap: 0.8rem;
  overflow-x: auto;
  padding: 0.7rem 0;
}
.job-r-applicant::-webkit-scrollbar {
  height: 0.7rem !important;
}
.jap-avatar {
  margin: 0 1rem;
  cursor: pointer;
}
.jap-avatar img {
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
  border-radius: 50%;
}
.jap-avatar-cont span {
  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;
}

/* Applicant Profile */
.profile-top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.applicant-profile,
.img-n-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.applicant-profile img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
}
.applicant-details {
  display: flex;
  flex-direction: column;
}
</style>
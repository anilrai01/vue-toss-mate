<template>
  <div class="tradie-task-list">
    <Modals :show="alertModal" @visibleOff="alertOff" taskModel>
      <h3 slot="header" class="text-brand font-weight-bold">Job Details!</h3>
      <div slot="body">
        <div class="task-top">
          <div class="task-details">
            <h2 class="text-lblack font-weight-bold">{{getCurrentJob.taskName}}</h2>
            <div class="task-post-profile my-2">
              <img class="profile-img" :src="getCurrentJob.imgAddress" alt />
              <div class="tpName ml-3">
                <h5 class="m-0 font-weight-bold text-muted">Posted by</h5>
                <h6 class="m-0">John Doe</h6>
              </div>
            </div>
          </div>
          <div class="task-budget" v-if="getCurrentJob.taskStat != 'Completed'">
            <div class="budget-title" v-if="getCurrentJob.taskType=='offer'">Task Budget</div>
            <div class="budget-title" v-if="getCurrentJob.taskType=='quotes'">Start to Quote now</div>
            <div class="task-amount">{{getCurrentJob.taskBudget}}</div>
            <button class="btn cus-btn" v-if="getCurrentJob.taskType=='offer'">Make an Offer</button>
            <button class="btn cus-btn" v-if="getCurrentJob.taskType=='quotes'">Make a Quote</button>
          </div>

          <div class="task-o-details fb-50" v-if="getCurrentJob.taskStat == 'Completed'">
            <div class="loc-profile d-flex j-sb f-col my-2">
              <div class="location d-flex f-row">
                <div class="loc mr-3">
                  <mdb-icon icon="map-marker-alt" class="text-grey mr-2" />
                  <span>{{getCurrentJob.address}}</span>
                </div>
                <div class="time">
                  <mdb-icon icon="calendar" class="text-grey mr-2" />
                  <span>{{getCurrentJob.created_date}}</span>
                </div>
              </div>
              <h5 class="mt-4 f-norm font-weight-bold text-grey">Details</h5>
              <p class="f-norm">{{getCurrentJob.taskDesc}}</p>
            </div>
          </div>
        </div>

        <div class="task-o-details" v-if="getCurrentJob.taskStat !== 'Completed'">
          <div class="loc-profile d-flex j-sb f-col my-3">
            <div class="location d-flex f-row">
              <div class="loc mr-3">
                <mdb-icon icon="map-marker-alt" class="text-grey mr-2" />
                <span>{{getCurrentJob.address}}</span>
              </div>
              <div class="time">
                <mdb-icon icon="calendar" class="text-grey mr-2" />
                <span>{{getCurrentJob.created_date}}</span>
              </div>
            </div>
            <h5 class="mt-4 f-norm font-weight-bold text-grey">Details</h5>
            <p class="f-norm">{{getCurrentJob.taskDesc}}</p>
          </div>
        </div>
      </div>
    </Modals>
    <div class="tradie-task p-3" v-for="task in taskList" :key="task.id">
      <div class="title-budg d-flex j-sb">
        <div class="profile">
          <img :src="task.imgAddress" alt="Profile" />
          <!-- :style="(task.taskStat == 'Completed') ? {height: '8rem'} : ''" -->
        </div>
        <div div class="desc">
          <div class="title-budge d-flex f-row j-sb">
            <h4 class="font-weight-bold c-brand">{{task.taskName}}</h4>
            <h5
              class="m-0 p-0 font-weight-bold text-lblack"
              v-if="task.taskType == 'offer' "
            >{{task.taskBudget}}</h5>
          </div>
          <div class="loc-profile d-flex j-sb f-col">
            <div class="location d-flex f-row">
              <div class="loc mr-3">
                <mdb-icon icon="map-marker-alt" class="text-grey mr-2" />
                <span>{{task.address}}</span>
              </div>
              <div class="time">
                <mdb-icon icon="calendar" class="text-grey mr-2" />
                <span>{{task.created_date}}</span>
              </div>
            </div>
            <h5 class="mt-3 f-norm font-weight-bold text-grey">Job Description</h5>
            <p class="f-norm">{{task.taskDesc}}</p>
          </div>
        </div>
      </div>

      <hr class="my-2" />
      <div class="msg d-flex j-sb a-c">
        <span class>
          Status :
          <span class="text-brand font-weight-bold">{{task.taskStat}}</span>
        </span>
        <button class="cus-btn px-2 py-1" @click="showModal(task)">Enquire</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
import Modals from "../Modals";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TradieTask",
  components: {
    mdbIcon,
    Modals
  },
  data() {
    return {
      alertModal: false
    };
  },
  props: {
    taskList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(["getCurrentJob"])
  },
  methods: {
    ...mapActions(["setCurrentJob"]),
    alertOff() {
      this.alertModal = false;
    },
    showModal(data) {
      this.setCurrentJob(data);
      this.alertModal = true;
      // console.log("Ehy");
    }
  }
};
</script>

<style scoped>
.tradie-task {
  background: var(--cream);
  display: flex;
  flex-direction: column;
  border-right: 4px solid #9ddd72;
  margin-bottom: 1rem;
  cursor: pointer;
}
.profile {
  width: 4rem;
  height: 5rem;
}
.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title-budg .profile {
  flex-basis: 15%;
}
.title-budg .desc {
  flex-basis: 80%;
}
.desc h4 {
  font-size: 1.25rem;
}
.task-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.task-details {
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
}
.task-budget {
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 3px solid #ccc;
  padding: 1rem;
}
.task-post-profile {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profile-img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
}
</style>
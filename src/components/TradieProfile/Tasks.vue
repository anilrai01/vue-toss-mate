<template>
  <div class="tradie-task-list">
    <div class="tradie-task p-3" v-for="task in taskList" :key="task.id">
      <div class="title-budg d-flex j-sb">
        <div class="profile">
          <img :src="task.imgAddress" alt="Profile" />
          <!-- :style="(task.taskStat == 'Completed') ? {height: '8rem'} : ''" -->
        </div>
        <div div class="desc">
          <h4 class="font-weight-bold c-brand">{{task.taskName}}</h4>
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
        <button class="cus-btn px-2 py-1">Enquire</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "TradieTask",
  components: {
    mdbIcon
  },
  props: {
    taskList: {
      type: Array,
      default: () => []
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
</style>
<template>
  <div class="tradie-task-list">
    <div class="tradie-task p-3" v-for="task in taskList" :key="task.id">
      <div class="title-budg d-flex j-sb">
        <h4 class="font-weight-normal c-brand">{{task.taskName}}</h4>
        <h3 class="font-weight-bold text-grey">$100</h3>
      </div>
      <div class="loc-profile d-flex j-sb">
        <div class="location">
          <div class="loc">
            <mdb-icon icon="map-marker-alt" class="text-grey mr-2" />
            <span>{{task.address}}</span>
          </div>
          <div class="time">
            <mdb-icon icon="calendar" class="text-grey mr-2" />
            <span>{{task.created_date}}</span>
          </div>
        </div>
        <div class="profile">
          <img
            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt="Profile"
          />
        </div>
      </div>
      <hr />
      <div class="msg">
        <span class="text-brand font-weight-bold">{{task.taskStat}}</span>
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
  border-left: 4px solid var(--brand);
  margin-bottom: 1rem;
  cursor: pointer;
}
.profile {
  width: 4rem;
  height: 4rem;
}
.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
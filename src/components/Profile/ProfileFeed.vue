<template>
  <div>
    <div class="d-nav">
      <li :class="{active : tabs.currentActive}" @click="toggleActive('currentActive')">Current</li>
      <li :class="{active : tabs.pastActive}" @click="toggleActive('pastActive')">Past</li>
    </div>
    <!-- Current Jobs Details  -->
    <div
      class="task-list my-3 p-3"
      v-for="task in progressingTask"
      :key="task.id"
      v-show="tabs.currentActive"
    >
      <div class="job-div">
        <div class="job-left">
          <h6 class="font-weight-bold c-brand">{{task.taskName}}</h6>
          <div class="task-details">
            <p class="mr-3">{{task.address + ', ' + task.postCode}}</p>
            <p>Posted {{task.created_date}}</p>
          </div>
          <h6>{{task.taskDesc}}</h6>
        </div>
        <div class="job-right">
          <div class="job-r-title px-2">
            <h6 class="p-0 m-0">Activities</h6>
            <p class="p-0 m-0">{{task.taskStatus.toUpperCase()}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- EOF Current Job Details -->
    <!-- Completed Job -->
    <div
      class="task-list my-3 p-3"
      v-for="task in completedTask"
      :key="task.id"
      v-show="tabs.pastActive"
    >
      <div class="job-div">
        <div class="job-left">
          <h6 class="font-weight-bold c-brand">{{task.taskName}}</h6>
          <div class="task-details">
            <p class="mr-3">{{task.address + ', ' + task.postCode}}</p>
            <p>Posted {{task.created_date}}</p>
          </div>
          <h6>{{task.taskDesc}}</h6>
        </div>
        <div class="job-right">
          <div class="job-r-title px-2">
            <h6 class="p-0 m-0">Activities</h6>
            <p class="p-0 m-0">{{task.taskStatus.toUpperCase(0)}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- EOF Completed Job -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfileFeed",
  components: {},
  data() {
    return {
      tabs: {
        currentActive: true,
        pastActive: false
      }
    };
  },
  computed: {
    ...mapGetters(["getTaskList"]),
    progressingTask() {
      return this.getTaskList.filter(el => el.taskStatus == "in-progress");
    },
    completedTask() {
      return this.getTaskList.filter(el => el.taskStatus == "completed");
    }
  },
  methods: {
    toggleActive(tag) {
      // console.log(tag);
      Object.keys(this.tabs).forEach(el =>
        el == tag ? (this.tabs[el] = true) : (this.tabs[el] = false)
      );
    }
  }
};
</script>
<style scoped>
.d-nav {
  width: 100%;
  height: 3rem;
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
}
li {
  list-style: none;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.active {
  border-bottom: 5px solid var(--brand);
}
.task-list {
  background: #eee;
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
}
.job-r-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>

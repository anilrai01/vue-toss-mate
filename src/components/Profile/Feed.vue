<template>
  <div>
    <div class="task-list my-3 p-3" v-for="task in progressTask" :key="task.id" v-show="vis">
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
  </div>
</template>

<script>
export default {
  name: "Feed",
  props: {
    progressTask: {
      type: Array,
      default: () => []
    },
    vis: {
      type: Boolean,
      default: false
    }
  }
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
}
.job-r-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
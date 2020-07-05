<template>
  <div>
    <div class="d-nav">
      <li :class="{active : tabs.currentActive}" @click="toggleActive('currentActive')">Current</li>
      <li :class="{active : tabs.pastActive}" @click="toggleActive('pastActive')">Past</li>
    </div>
    <!-- Current Jobs Details  -->
    <Feed :progressTask="progressingTask" v-if="tabs.currentActive" />
    <!-- EOF Current Job Details -->
    <!-- Completed Job -->
    <Feed :progressTask="completedTask" v-if="tabs.pastActive" />
    <!-- EOF Completed Job -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Feed from "./Feed";
export default {
  name: "ProfileFeed",
  components: {
    Feed
  },
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
  background: var(--cream);
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
</style>

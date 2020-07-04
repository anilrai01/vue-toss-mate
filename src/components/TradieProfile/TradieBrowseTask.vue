<template>
  <div>
    <div class="tprofile-tabs">
      <li
        :class="{active : tabActive.browseActive}"
        @click="activeToggler('browseActive')"
      >Browse Task</li>
      <li :class="{active : tabActive.taskActive}" @click="activeToggler('taskActive')">My Task</li>
    </div>
    <div class="tradie-task-list w-100 my-3">
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
    </div>
  </div>
</template>

<script>
import Tasks from "./Tasks";
export default {
  name: "TradieBrowseTask",
  components: {
    Tasks
  },
  data() {
    return {
      tabActive: {
        browseActive: true,
        taskActive: false
      }
    };
  },
  methods: {
    activeToggler(tag) {
      Object.keys(this.tabActive).forEach(el =>
        String(el) == tag
          ? (this.tabActive[el] = true)
          : (this.tabActive[el] = false)
      );
    }
  }
};
</script>

<style scoped>
.tprofile-tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
  background: var(--cream);
}
.tprofile-tabs li {
  position: relative;
  list-style-type: none;
  padding: 1rem 2rem;
  cursor: pointer;
}
.tprofile-tabs li::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--brand);
  transform: scaleX(0);
  transition: 0.3s ease-in-out;
}
.tprofile-tabs li.active::before,
.tprofile-tabs li:hover::before {
  transform: scaleX(1);
}
</style>
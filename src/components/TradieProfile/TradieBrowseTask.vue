<template>
  <div>
    <div class="tprofile-tabs">
      <li
        class="mr-2"
        :class="{active : tabActive.quotesActive}"
        @click="activeToggler('quotesActive')"
      >Quotes</li>
      <li :class="{active : tabActive.offerActive}" @click="activeToggler('offerActive')">Offer</li>
    </div>
    <div class="tradie-task-list w-100 my-3">
      <!-- Quotes Task -->
      <Tasks :taskList="quotesTask" v-if="tabActive.quotesActive" />
      <!-- Offer Task -->
      <Tasks :taskList="offerTask" v-if="tabActive.offerActive" />
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
  props: {
    propsTask: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabActive: {
        quotesActive: true,
        offerActive: false
      }
    };
  },
  computed: {
    quotesTask() {
      return this.propsTask.filter(el => el.taskType == "quotes");
    },
    offerTask() {
      return this.propsTask.filter(el => el.taskType == "offer");
    }
  },
  methods: {
    activeToggler(tag) {
      Object.keys(this.tabActive).forEach(el =>
        String(el) == tag
          ? (this.tabActive[el] = true)
          : (this.tabActive[el] = false)
      );
    }
  },
  // mounted() {
  //   this.tabActive.quotesActive = true;
  //   this.tabActive.offerActive = false;
  // }
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
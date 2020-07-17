<template>
  <div>
    <div class="tprofile-tabs">
      <li :class="{active : tabActive.offerActive}" @click="activeToggler('offerActive')">Offer</li>

      <li
        class="mr-2"
        :class="{active : tabActive.quotesActive}"
        @click="activeToggler('quotesActive')"
      >Quotes</li>
    </div>
    <div class="tradie-tasks w-100 my-3">
      <!-- Quotes Task -->
      <Tasks :taskList="quotesTask" v-if="tabActive.quotesActive" />
      <!-- Offer Task -->
      <Tasks :taskList="offerTask" v-if="tabActive.offerActive" />

      <!-- <div class="task-desc">
        <img class="choice-img" src="../../assets/choose_list.svg" />
        <h4 class="text-center text-brand my-5 px-5">Check on all the available list of tasks</h4>
        <h5
          class="text-center px-5 text-muted"
        >Remember You need to be a part of Toosmate community in order to enjoy the Quote Task as well</h5>
      </div>-->
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
        offerActive: true,
        quotesActive: false
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
  }
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

/* .tradie-tasks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tradie-tasks .tradie-task-list {
  flex-basis: 60%;
}
.tradie-tasks .task-desc {
  flex-basis: 38.5%;
} */
/* 
.task-desc {
  background: var(--cream);
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.choice-img {
  width: 15rem;
} */
</style>
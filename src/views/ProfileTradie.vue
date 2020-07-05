<template>
  <div id="tradieProfile">
    <mdb-container class="my-3">
      <mdb-row>
        <mdb-col col="3">
          <TProfileNav :tabs="tabs" @handleActiveStat="handleActiveToggle" />
        </mdb-col>
        <mdb-col>
          <TProfileDash v-if="tabs.activeDash" />
          <TProfileBrowse v-if="tabs.activeBrowse" :propsTask="getTradieTasks" />
          <TProfileBrowse v-if="tabs.activeTaskList" :propsTask="getCompletedTasks" />
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <Footer />
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import TProfileNav from "../components/TradieProfile/TProfileNav";
import TProfileDash from "../components/TradieProfile/TProfileDash";
import TProfileBrowse from "../components/TradieProfile/TradieBrowseTask";
import Footer from "../components/Footer";
import { mapGetters } from "vuex";

export default {
  name: "TradieProfile",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    TProfileNav,
    TProfileDash,
    TProfileBrowse,
    Footer
  },
  data() {
    return {
      tabs: {
        activeDash: true,
        activeBrowse: false,
        activeTaskList: false,
        activePaymentHistory: false,
        activeNotification: false,
        activeSettings: false
      }
    };
  },
  methods: {
    handleActiveToggle(tab) {
      Object.keys(this.tabs).forEach(el =>
        String(el) == String(tab)
          ? (this.tabs[el] = true)
          : (this.tabs[el] = false)
      );
    }
  },
  computed: {
    ...mapGetters(["getTradieTasks", "getCompletedTasks"])
  }
};
</script>

<style scoped>
</style>
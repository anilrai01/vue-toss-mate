<template>
  <div>
    <div class="tprofile-tabs">
      <li
        class="mr-2"
        :class="{active : tabActive.editProfileActive}"
        @click="activeToggler('editProfileActive')"
      >Edit Profile</li>
      <li
        :class="{active : tabActive.changePassword}"
        @click="activeToggler('changePassword')"
      >Change Password</li>
    </div>
    <div class="tradie-task-list w-100 my-3">
      <!-- Quotes Task -->
      <EditProfile v-if="tabActive.editProfileActive" />
      <!-- Offer Task -->
      <ChangePassword v-if="tabActive.changePassword" />
    </div>
  </div>
</template>

<script>
import EditProfile from "../Profile/EditProfile";
import ChangePassword from "../Profile/ChangePassword";
export default {
  name: "TradieBrowseTask",
  components: {
    EditProfile,
    ChangePassword
  },
  data() {
    return {
      tabActive: {
        editProfileActive: true,
        changePassword: false
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
  //   this.tabActive.changePassword = false;
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
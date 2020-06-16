<template>
  <div>
    <div id="dash-nav">
      <div class="info">
        <div class="avatar bg-center-style"></div>
        <div class="u-profile">
          <h6 class="font-weight-bold m-0 ml-3">Prithak Creation</h6>
          <p class="text-muted m-0 ml-3 u-name">@prithakCreation</p>
        </div>
      </div>
      <router-link to="/get-quotes">
        <button class="btn cus-btn quotes-btn">Get Quotes Now</button>
      </router-link>
      <ul class="list-grp">
        <li
          class="list-items"
          :class="{ active : tabs.activeJob }"
          @click="activeToggler('activeJob')"
        >
          My Jobs
          <mdb-badge color="primary" pill class="f-right">14</mdb-badge>
        </li>
        <li
          class="list-items"
          :class="{ active : tabs.activeMessage }"
          @click="activeToggler('activeMessage')"
        >
          My Message
          <mdb-badge color="primary" pill class="f-right">2</mdb-badge>
        </li>
        <li
          class="list-items"
          :class="{ active : tabs.activeEditProfile }"
          @click="activeToggler('activeEditProfile')"
        >
          Edit Profile
          <mdb-badge color="primary" pill class="f-right">1</mdb-badge>
        </li>
        <li
          class="list-items"
          :class="{ active : tabs.activeChangePassword }"
          @click="activeToggler('activeChangePassword')"
        >Change Password</li>
      </ul>
    </div>
    <div class="dash-support p-4">
      <p class="font-weight-bold p-0 m-0 mb-2">Need Support?</p>
      <p class="text-muted">We are here to help you</p>
      <div>
        <mdb-icon icon="phone-alt" />&nbsp;&nbsp;+123 456 789
      </div>
    </div>
  </div>
</template>

<script>
import { mdbBadge, mdbIcon } from "mdbvue";
export default {
  name: "ProfileNav",
  components: {
    mdbBadge,
    mdbIcon
  },
  props: {
    tabs: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    activeToggler(tab) {
      // console.log("param:", tab);
      this.$emit("handleActiveStat", tab);
      // console.log(this.tabs);
    }
  }
};
</script>

<style scoped>
#dash-nav,
.dash-support {
  background: #eee;
}
.dash-support {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}
.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--brand);
  background-image: url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
}
.u-name {
  font-size: 0.8rem;
}
.quotes-btn {
  width: 95%;
  box-sizing: border-box;
  display: block;
  margin: auto;
  font-size: 0.7rem;
}
.active {
  background: #fff !important;
  color: #000;
  border-left: 5px solid var(--brand) !important;
}
.list-grp {
  border: none;
  margin: 2rem 0;
}
.list-items {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 0.9rem;
}
ul {
  list-style-type: none;
}
li {
  padding: 1rem;
}
li:hover {
  background: #fff;
}
</style>

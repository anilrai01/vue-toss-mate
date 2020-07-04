<template>
  <div class="set-position">
    <div id="dash-nav">
      <div class="info">
        <div class="avatar bg-center-style"></div>
        <div class="u-profile mt-3">
          <h6 class="font-weight-bold text-center m-0">Prithak Creation</h6>
          <p class="text-muted text-center m-0 u-name">@prithakCreation</p>
        </div>
      </div>
      <button class="btn cus-btn quotes-btn">Post a Task</button>
      <ul class="list-grp">
        <li
          class="list-items"
          :class="{active : tabs.activeDash}"
          @click="activeToggler('activeDash')"
        >
          Dashboard
          <mdb-badge color="primary" pill class="f-right">14</mdb-badge>
        </li>
        <li
          class="list-items"
          :class="{active : tabs.activePaymentHistory}"
          @click="activeToggler('activePaymentHistory')"
        >
          Payment History
          <mdb-badge color="primary" pill class="f-right">2</mdb-badge>
        </li>
        <li
          class="list-items"
          :class="{active: tabs.activeNotification}"
          @click="activeToggler('activeNotification')"
        >
          Notification
          <mdb-badge color="primary" pill class="f-right">1</mdb-badge>
        </li>
        <li
          class="list-items"
          :class="{active : tabs.activeSettings}"
          @click="activeToggler('activeSettings')"
        >Settings</li>
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
  name: "TProfileNav",
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
  background: var(--cream);
}
/* .set-position {
  position: fixed;
  z-index: 500;
} */
.dash-support {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}
.avatar {
  width: 11rem;
  height: 11rem;
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

.list-grp {
  border: none;
  margin: 1rem 0;
}
.list-items {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 0.9rem;
}
.list-items::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--brand);
  transition: 0.3s ease-in-out;
}
.list-items.active::before,
.list-items:hover::before {
  width: 5px;
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

<template>
  <div id="dash-nav">
    <div class="info">
      <div class="avatar"></div>
      <div class="u-profile">
        <h5 class="user-name m-0 ml-3">Prithak Creation</h5>
        <h6 class="user-tag ml-3">@prithakCreation</h6>
      </div>
    </div>
    <button class="btn cus-btn quotes-btn">Get Quotes Now</button>
    <ul class="list-grp">
      <li class="list-items" @click="activeToggler('activeJob')">
        My Jobs
        <mdb-badge color="primary" pill>14</mdb-badge>
      </li>
      <li class="list-items" @click="activeToggler('activeMessage')">
        My Message
        <mdb-badge color="primary" pill>2</mdb-badge>
      </li>
      <li class="list-items" @click="activeToggler('activeEditProfile')">
        Edit Profile
        <mdb-badge color="primary" pill>1</mdb-badge>
      </li>
      <li class="list-items" @click="activeToggler('activeChangePassword')">Change Password</li>
    </ul>
  </div>
</template>

<script>
import { mdbBadge } from "mdbvue";
export default {
  name: "DashNav",
  components: {
    mdbBadge
  },
  data() {
    return {
      tabs: {
        activeJob: true,
        activeMessage: false,
        activeEditProfile: false,
        activeChangePassword: false
      }
    };
  },
  methods: {
    activeToggler(tab) {
      console.log("param:", tab);
      Object.keys(this.tabs).forEach(el =>
        String(el) == String(tab)
          ? (this.tabs[el] = true)
          : (this.tabs[el] = false)
      );
      console.log(this.tabs);
    }
  }
};
</script>

<style scoped>
#dash-nav {
  background: #eee;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}
.avatar {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--brand);
  background-image: url("https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.user-name {
  font-weight: bold;
}
.user-tag {
  color: #aaa;
}
.quotes-btn {
  width: 95%;
  box-sizing: border-box;
  display: block;
  margin: auto;
}
.active {
  background: #fff;
  color: #000;
  border-left: 5px solid var(--brand);
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

<template>
  <div id="dash-nav">
    <div class="info">
      <div class="avatar"></div>
      <h5 class="user-name ml-3">Prithak Creation</h5>
    </div>
    <button class="btn cus-btn quotes-btn">Get Quotes Now</button>
    <mdb-list-group class="list-grp">
      <mdb-list-group-item class="list-items" active
        >My Jobs<mdb-badge color="primary" pill>14</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item class="list-items"
        >My Message<mdb-badge color="primary" pill>2</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item class="list-items"
        >Edit Profile<mdb-badge color="primary" pill>1</mdb-badge>
      </mdb-list-group-item>
      <mdb-list-group-item class="list-items"
        >Change Password
      </mdb-list-group-item>
    </mdb-list-group>
  </div>
</template>

<script>
import { mdbListGroup, mdbListGroupItem, mdbBadge } from "mdbvue";
export default {
  name: "DashNav",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
  },
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
.quotes-btn {
  width: 95%;
  box-sizing: border-box;
  display: block;
  margin: auto;
}
.list-grp {
  border: none;
  margin: 2rem 0;
}
.list-items {
  background: transparent;
  border: none;
  cursor: pointer;
}
.active {
  background: #fff;
  color: #000;
  border-left: 5px solid var(--brand);
}
</style>

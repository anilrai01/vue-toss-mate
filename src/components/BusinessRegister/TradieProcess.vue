<template>
  <mdb-container class="my-5">
    <h1>How it works for you ?</h1>
    <mdb-row class="my-5">
      <mdb-col col="4">
        <img src="../../assets/invites_g.png" />
        <h6>1. Check for available task in your dashboard</h6>
        <p>There are thousands of task being updated in our system per day</p>
      </mdb-col>
      <mdb-col col="4">
        <img src="../../assets/communicate_g.png" />
        <h6>2. Communicate with each other and have a deal</h6>
        <p>Knowing how to convince the client is one of the most crutial task</p>
      </mdb-col>
      <mdb-col col="4">
        <img src="../../assets/completeTask_g.png" />
        <h6>3. Complete task and make greater connection in the community</h6>
        <p>The more you make your client happy, more likely to get more jobs</p>
      </mdb-col>
    </mdb-row>
    <router-link to="/login">
      <mdb-btn class="align">Login Now</mdb-btn>
    </router-link>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "WorkProcess",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
}
.col-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  text-align: center;
}
h6 {
  text-align: center;
  font-weight: bold;
  margin: 1rem 0;
}
img {
  height: 13rem;
}
.align {
  display: block;
  margin: 0 auto;
  background: var(--brand) !important;
}
</style>
<template>
  <!-- <h1>How it works for you ?</h1> -->
  <mdb-row class="mx-5 my-4">
    <mdb-col col="4">
      <img src="../../assets/available_task.svg" />
      <h6 class="text-lblack">1. Browse and select task from the navigation menu</h6>
    </mdb-col>
    <mdb-col col="4">
      <img src="../../assets/communicate.svg" />
      <h6 class="text-lblack">2. Communicate with each other and have a deal</h6>
    </mdb-col>
    <mdb-col col="4">
      <img src="../../assets/connection.svg" />
      <h6 class="text-lblack">3. Complete task and make greater connection in the community</h6>
    </mdb-col>
  </mdb-row>
  <!-- <router-link to="/login">
      <mdb-btn class="align">Login Now</mdb-btn>
  </router-link>-->
</template>

<script>
import { mdbRow, mdbCol } from "mdbvue";
export default {
  name: "WorkProcess",
  components: {
    mdbRow,
    mdbCol
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
  justify-content: center;
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
  height: 8rem;
}
.align {
  display: block;
  margin: 0 auto;
  background: var(--brand) !important;
}
</style>
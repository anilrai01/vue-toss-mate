<template>
  <mdb-container class="my-5">
    <h1>How to operate with us ?</h1>
    <mdb-row class="my-5">
      <mdb-col col="4">
        <img src="../assets/search.png" />
        <h6>1. Search your required job from our list</h6>
        <p>Type any relevant topic of your required job in the search field</p>
      </mdb-col>
      <mdb-col col="4">
        <img src="../assets/choose.png" />
        <h6>2. Choose from our large variety of choices</h6>
        <p>There are lare option for you to decide the right choice. You can check their work history and reviews too</p>
      </mdb-col>
      <mdb-col col="4">
        <img src="../assets/deal.png" />
        <h6>3. Select and choose tradie on your own</h6>
        <p>Have a direct contact with your tradie and make deal accordingly</p>
      </mdb-col>
    </mdb-row>
    <mdb-btn color="primary" class="align">Register Now</mdb-btn>
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
}
</style>
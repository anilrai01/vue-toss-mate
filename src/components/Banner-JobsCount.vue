<template>
  <mdb-container class="my-5">
    <h1>We help to provide jobs at your pocket</h1>
    <mdb-row class="mt-5">
      <mdb-col>
        <h2 class="f1">2500+</h2>
        <h4>Happy Clients</h4>
      </mdb-col>
      <mdb-col>
        <h2 class="f2">4500+</h2>
        <h4>Verified Tradie</h4>
      </mdb-col>
      <mdb-col>
        <h2 class="f3">500+</h2>
        <h4>Cities</h4>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "BannerJobs",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
h1 {
  color: #fff;
  text-align: center;
}
.col {
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  font-weight: bold;
}
h4 {
  color: #ebebeb;
}

/* .f1 {
  color: #35A7FF;
}
.f2 {
  color: #FF5964;
}
.f3 {
  color: #FFE74C;
} */
.f1,
.f2,
.f3 {
  color: #fff;
}
</style>
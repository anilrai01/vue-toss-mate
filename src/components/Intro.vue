<template>
  <mdb-container class="my-5">
    <mdb-row>
      <mdb-col col="7">
        <img class="job-img" src="../assets/jobOffers_g.png" />
      </mdb-col>
      <mdb-col col="5" class="text-right">
        <h2 class="comp-title">TossMate</h2>
        <h4>
          <span class="high">Bringing</span> your business into your
          <span class="high">pocket</span>
        </h4>
        <p
          class="text-justify mt-4"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium officia, excepturi delectus fugiat sunt necessitatibus culpa possimus ullam dolor laboriosam laudantium recusandae suscipit laborum, corrupti et neque optio, ratione ab.</p>
        <p
          class="text-justify mt-4"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium officia, excepturi delectus fugiat sunt necessitatibus culpa possimus ullam dolor laboriosam laudantium recusandae suscipit laborum, corrupti et neque optio, ratione ab.</p>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "Intro",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
.job-img {
  width: 100%;
  height: auto;
}
h3,
h4,
p {
  color: rgba(0, 0, 0, 0.7);
}
.comp-title {
  font-size: 3rem;
  font-weight: bold;
}
.high {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
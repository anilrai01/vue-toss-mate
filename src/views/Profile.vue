<template>
  <div id="#profile">
    <mdb-container class="my-3">
      <mdb-row>
        <mdb-col col="4">
          <DashNav />
        </mdb-col>
        <mdb-col>
          <DashJobs />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import DashNav from "../components/Profile/DashNav";
import DashJobs from "../components/Profile/DashJobs";
export default {
  name: "Profile",
  components: {
    mdbContainer,
    DashNav,
    DashJobs,
    mdbRow,
    mdbCol,
  },
};
</script>

<style scoped></style>

<template>
  <div id="#profile">
    <mdb-container class="my-3">
      <mdb-row>
        <mdb-col col="4">
          <ProfileNav />
        </mdb-col>
        <mdb-col>
          <ProfileFeed />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import ProfileNav from "../components/Profile/ProfileNav";
import ProfileFeed from "../components/Profile/ProfileFeed";
export default {
  name: "Profile",
  components: {
    mdbContainer,
    ProfileNav,
    ProfileFeed,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped></style>

<template>
  <div id="#profile">
    <mdb-container class="my-3">
      <mdb-row>
        <mdb-col col="3 position-relative">
          <ProfileNav :tabs="tabs" @handleActiveStat="handleActiveToggle" />
        </mdb-col>
        <mdb-col col="9">
          <ProfileFeed v-if="tabs.activeJob" />
          <EditProfile v-if="tabs.activeEditProfile" />
          <ChangePassword v-if="tabs.activeChangePassword" />
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <Footer />
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import ProfileNav from "../components/Profile/ProfileNav";
import ProfileFeed from "../components/Profile/ProfileFeed";
import EditProfile from "../components/Profile/EditProfile";
import ChangePassword from "../components/Profile/ChangePassword";
import Footer from "../components/Footer";
export default {
  name: "Profile",
  components: {
    mdbContainer,
    ProfileNav,
    ProfileFeed,
    mdbRow,
    mdbCol,
    EditProfile,
    ChangePassword,
    Footer,
  },
  data() {
    return {
      tabs: {
        activeJob: true,
        activeMessage: false,
        activeEditProfile: false,
        activeChangePassword: false,
      },
    };
  },
  methods: {
    handleActiveToggle(tab) {
      Object.keys(this.tabs).forEach((el) =>
        String(el) == String(tab)
          ? (this.tabs[el] = true)
          : (this.tabs[el] = false)
      );
    },
  },
};
</script>

<style scoped></style>

<template>
  <mdb-view class="banner-pic my-5">
    <mdb-mask overlay="black-light" />
  </mdb-view>
</template>

<script>
import { mdbView, mdbMask } from "mdbvue";
export default {
  name: "Banner",
  components: {
    mdbView,
    mdbMask
  }
};
</script>

<style scoped>
.banner-pic {
  width: 100%;
  height: 40vh;
  background-image: url("https://images.unsplash.com/photo-1587407646633-aa1348f0dd9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
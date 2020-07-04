<template>
  <div class="address-bar">
    <h6 class="p-0 m-0 mr-2 font-weight-bold">Get Connected with us:</h6>
    <mdb-icon icon="phone-alt" />&nbsp;&nbsp;+123 456 789
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "NavTop",
  components: {
    mdbIcon
  }
};
</script>

<style scoped>
.address-bar {
  background: var(--cream);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  min-height: 3rem;
}
</style>
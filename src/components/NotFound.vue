<template>
  <mdb-container class="my-4">
    <div class="nf">
      <h2>404</h2>
      <h1>Page not Found !</h1>
      <h1 class="font-weight-bold c-brand">Unfortunately ToosMate is unable to process your request!</h1>
    </div>
  </mdb-container>
</template>
<script>
import { mdbContainer } from "mdbvue";
export default {
  name: "NotFound",
  components: {
    mdbContainer
  }
};
</script>

<style scoped>
.nf {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

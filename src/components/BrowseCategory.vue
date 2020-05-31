<template>
  <div class="category-cover my-5">
    <mdb-container>
      <h3>Browse Popular Categories</h3>
        <mdb-icon icon="home" />
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbIcon } from "mdbvue";
export default {
  name: "BrowseCategory",
  components: {
    mdbContainer,
    mdbIcon
  }
};
</script>

<style scoped>
.category-cover {
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: #eee;
}
h3 {
  font-weight: bold;
}
</style>
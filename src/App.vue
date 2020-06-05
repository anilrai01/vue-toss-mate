<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --brand: #376c13;
  --lightBg: #f1f1f1;
  --brOverlayUnit: 28rem;
}
.cus-btn {
  background: var(--brand) !important;
  color: #fff;
}
mark {
  padding: 5px 0 !important;
}
</style>

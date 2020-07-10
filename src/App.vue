<template>
  <div id="app">
    <!-- <NavTop /> -->
    <Navbar />
    <router-view :class="computeMargin"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import NavTop from "./components/Home/NavTop";

export default {
  name: "App",
  components: {
    Navbar
    // NavTop
  },
  computed: {
    computeMargin() {
      if (this.$route.path !== "/") {
        return "maintain-margin";
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --brand: #376c13;
  --brandL2: #3c8f1a;
  --brandL3: #74d14c;
  --brandDivs: #eee;
  --lightBg: #f1f1f1;
  /* --cream: #fbfffb; */
  /* --cream: #ffffff; */
  /* --white: #fdfefe; */
  --cream: #f8f8f8;
  --grey: #5c5c5c;
  --black: #373737;
  --lblack: #424242;
  --brOverlayUnit: 28rem;
  --fontHelvNeue: Helvetica Neue, sans-serif;
}
body {
  /* background: #f6f8fd; */
  background: #fff;
  font-family: Helvetica, sans-serif !important;
}
.container {
  max-width: 90% !important;
}
.font-helvNeue {
  font-family: var(--fontHelvNeue) !important;
}
.maintain-margin {
  margin-top: 80px;
}
.d-in {
  display: inline;
}
.f-row {
  flex-direction: row;
}
.f-col {
  flex-direction: column;
}
.f-wrap {
  flex-wrap: wrap;
}
.j-c {
  justify-content: center;
}
.a-c {
  align-items: center;
}
.j-sb {
  justify-content: space-between;
}
.a-sb {
  align-items: space-between;
}
.j-fs {
  justify-content: flex-start;
}
.a-fs {
  align-items: flex-start;
}
.c-p {
  cursor: pointer;
}
.f-head {
  font-size: 1.25rem;
}
.f-norm {
  font-size: 1rem;
}
.fb-50 {
  flex-basis: 50%;
}
.fb-40 {
  flex-basis: 40%;
}
.fb-60 {
  flex-basis: 60%;
}
.cus-btn {
  background: var(--brandL2) !important;
  color: #fff;
  border: none;
}
.cus-btn:hover {
  color: #fff;
}
.text-grey {
  color: var(--grey);
}
.text-brand {
  color: var(--brand);
}
.text-brand2 {
  color: var(--brandL2);
}
.text-black {
  color: var(--black);
}
.text-c {
  color: #ccc;
}
.text-lblack {
  color: var(--lblack);
}
.bg-transparent {
  background-color: transparent !important;
}
.bg-brand2 {
  background: var(--brandL2) !important;
}
.cus-btn-outline {
  color: var(--brandL2);
  border: none;
  border: 2px solid var(--brandL2);
}
.cus-btn-outline:hover {
  color: var(--brandL2);
}
mark {
  padding: 5px 0 !important;
}
.close {
  font-size: 2.3rem;
  padding: 1rem 1.5rem !important;
}
.modal-footer {
  border: 0 !important;
}
.modal-header {
  border: 0;
  padding-bottom: 0;
}
.modal-body {
  border: 0;
}
.modal-content {
  padding: 1rem 2rem;
}
.progress-bar {
  background-color: var(--brand);
  transition: 0.6s ease;
}
.disabled,
:disabled {
  opacity: 0.3 !important;
}
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: var(--brand);
  background-color: var(--brand);
}
.c-brand {
  color: var(--brand);
}
.f-right {
  float: right;
}
.bg-center-style {
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
}
</style>

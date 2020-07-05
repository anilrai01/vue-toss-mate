<template>
  <div id="app">
    <NavTop />
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NavTop from "./components/Home/NavTop";

export default {
  name: "App",
  components: {
    Navbar,
    NavTop
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
  --brandDivs: #eee;
  --lightBg: #f1f1f1;
  /* --cream: #fbfffb; */
  /* --cream: #ffffff; */
  /* --white: #fdfefe; */
  --cream: #f8f8f8;
  --grey: #5c5c5c;
  --brOverlayUnit: 28rem;
}
body {
  /* background: #f6f8fd; */
  background: #fff;
}
.f-row {
  flex-direction: row;
}
.f-col {
  flex-direction: column;
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
.cus-btn {
  background: var(--brand) !important;
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
.cus-btn-outline {
  background: #fff !important;
  color: var(--brand);
  border: none;
  border: 2px solid var(--brand);
}
.cus-btn-outline:hover {
  color: var(--brand);
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

<template>
  <div class="tprofile-dash">
    <div class="dash-msg">
      <!-- <h2>Welcome Back,</h2> -->
      <img class="welcome_img" src="../../assets/welcome_msg2.svg" alt />
      <h2 class="text-center font-weight-bold text-black">Welcome Back!</h2>
      <h4 class="text-center text-grey">Lets get back to job hunting</h4>
    </div>
    <div class="dash-how">
      <h5 class="text-black m-3">Just follow few simple steps and you are ready to go</h5>
      <WorkProcess />
    </div>
  </div>
</template>

<script>
import WorkProcess from "./WorkProcess.vue";
export default {
  name: "TProfileDash",
  components: {
    WorkProcess
  }
};
</script>

<style scoped>
.dash-msg,
.dash-how {
  background: var(--cream);
  padding: 1rem;
}
.welcome_img {
  display: block;
  width: 35rem;
  margin: 2rem auto;
}
.dash-how {
  margin-top: 1rem;
}
</style>
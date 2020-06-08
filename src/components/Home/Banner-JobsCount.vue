<template>
  <div class="banner-job">
    <h3>We help to provide jobs at your pocket</h3>
    <div class="s-row mt-4">
      <div class="s-col">
        <h2 class="f1">2500+</h2>
        <h4>Happy Clients</h4>
      </div>
      <div class="s-col">
        <h2 class="f2">4500+</h2>
        <h4>Verified Tradie</h4>
      </div>
      <div class="s-col">
        <h2 class="f3">500+</h2>
        <h4>Cities</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerJobs"
};
</script>

<style scoped>
.banner-job {
  width: 60%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.s-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.s-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h3 {
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.col {
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  font-weight: bold;
}
h4 {
  color: #ebebeb;
}

/* .f1 {
  color: #35A7FF;
}
.f2 {
  color: #FF5964;
}
.f3 {
  color: #FFE74C;
} */
.f1,
.f2,
.f3 {
  color: #fff;
}
</style>
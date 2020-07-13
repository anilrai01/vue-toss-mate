<template>
  <div class="news-bg">
    <mdb-container class="center">
      <h2 class="my-2">Have any boring task pending on your list ?</h2>
      <h5 class="my-3">Join us and let the work done in few clicks now !</h5>
      <router-link to="/get-quotes">
        <mdb-btn outline="white">Get Quotes</mdb-btn>
      </router-link>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbBtn } from "mdbvue";
export default {
  name: "NewsLetter",
  components: {
    mdbContainer,
    mdbBtn
  }
};
</script>

<style scoped>
.news-bg {
  background-image: radial-gradient(
      circle at 21% 44%,
      rgba(23, 23, 23, 0.05) 0%,
      rgba(23, 23, 23, 0.05) 50%,
      rgba(109, 109, 109, 0.05) 50%,
      rgba(109, 109, 109, 0.05) 100%
    ),
    radial-gradient(
      circle at 21% 96%,
      rgba(92, 92, 92, 0.05) 0%,
      rgba(92, 92, 92, 0.05) 50%,
      rgba(199, 199, 199, 0.05) 50%,
      rgba(199, 199, 199, 0.05) 100%
    ),
    radial-gradient(
      circle at 25% 37%,
      rgba(230, 230, 230, 0.05) 0%,
      rgba(230, 230, 230, 0.05) 50%,
      rgba(25, 25, 25, 0.05) 50%,
      rgba(25, 25, 25, 0.05) 100%
    ),
    linear-gradient(90deg, rgb(11, 170, 95), rgb(55, 108, 19));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  padding: 5rem 0;
}

h2,
h5 {
  font-weight: bold;
  color: #fff;
}
.center {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
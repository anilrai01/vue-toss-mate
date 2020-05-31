<template>
  <div class="news-bg mt-5">
    <mdb-container class="center">
      <h2 class="my-2">Have any boring task pending on your list ?</h2>
      <h5 class="my-3">Join us and let the work done in few clicks now !</h5>
      <mdb-btn outline="white">Get Quotes</mdb-btn>
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
      circle at 19% 90%,
      rgba(190, 190, 190, 0.04) 0%,
      rgba(190, 190, 190, 0.04) 17%,
      transparent 17%,
      transparent 100%
    ),
    radial-gradient(
      circle at 73% 2%,
      rgba(78, 78, 78, 0.04) 0%,
      rgba(78, 78, 78, 0.04) 94%,
      transparent 94%,
      transparent 100%
    ),
    radial-gradient(
      circle at 45% 2%,
      rgba(18, 18, 18, 0.04) 0%,
      rgba(18, 18, 18, 0.04) 55%,
      transparent 55%,
      transparent 100%
    ),
    radial-gradient(
      circle at 76% 60%,
      rgba(110, 110, 110, 0.04) 0%,
      rgba(110, 110, 110, 0.04) 34%,
      transparent 34%,
      transparent 100%
    ),
    radial-gradient(
      circle at 68% 56%,
      rgba(246, 246, 246, 0.04) 0%,
      rgba(246, 246, 246, 0.04) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 71% 42%,
      rgba(156, 156, 156, 0.04) 0%,
      rgba(156, 156, 156, 0.04) 47%,
      transparent 47%,
      transparent 100%
    ),
    radial-gradient(
      circle at 46% 82%,
      rgba(247, 247, 247, 0.04) 0%,
      rgba(247, 247, 247, 0.04) 39%,
      transparent 39%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 47%,
      rgba(209, 209, 209, 0.04) 0%,
      rgba(209, 209, 209, 0.04) 45%,
      transparent 45%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(84, 36, 210), rgb(44, 27, 154));
  width: 100%;
  height: 30vh;
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
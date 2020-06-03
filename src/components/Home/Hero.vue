<template>
  <mdb-view alt class="hero-img">
    <mdb-mask overlay="black-light" />

    <div class="overlay-form">
      <input
        type="text"
        class="form-controls form-i"
        placeholder="Enter your trade or business name..."
      />
      <input
        type="text"
        class="form-controls form-ii"
        placeholder="Enter postcode"
      />
      <button class="search-btn">Go</button>
    </div>

    <div class="bot-overlay">
      <h5 class="p-0 m-0 mr-4">
        <mdb-icon icon="briefcase" class="mr-2" />Become a Tradie - Start
        Earning now
      </h5>
      <router-link to="/register">
        <mdb-btn
          color="indigo"
          outline="white"
          size="md"
          class="my-0"
          type="submit"
          >Register Now</mdb-btn
        >
      </router-link>
    </div>
  </mdb-view>
</template>

<script>
import { mdbView, mdbMask, mdbIcon, mdbBtn } from "mdbvue";
export default {
  name: "Hero",
  components: {
    mdbView,
    mdbMask,
    mdbIcon,
    mdbBtn,
  },
};
</script>

<style scoped>
.hero-img {
  position: relative;
  height: 60vh;
  background-image: url("https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay-form {
  z-index: 5;
  display: flex;
  flex-direction: row;
  width: 60%;
  border: 20px solid rgba(0, 0, 0, 0.6);
}
.search-btn {
  background: var(--brand) !important;
  padding: 0 2.5rem;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
}
.form-controls {
  padding: 1rem 1.5rem;
}
.form-i {
  width: 70%;
}

.bot-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--brand);
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bot-overlay h3 {
  color: #fff;
}
</style>

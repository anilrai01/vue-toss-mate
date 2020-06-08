<template>
  <div id="register">
    <Banner
      height="35"
      img_url="https://images.unsplash.com/photo-1587407646633-aa1348f0dd9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    />
    <mdb-container class="my-5">
      <mdb-row>
        <mdb-col col="7">
          <!-- Default form login -->
          <form>
            <p class="h4 form-label mb-4">Personal Details</p>
            <label for="username" class="grey-text">Username</label>
            <input type="text" id="username" class="form-control" />
            <br />
            <label for="loginEmail" class="grey-text">Your email</label>
            <input type="email" id="loginEmail" class="form-control" />
            <br />
            <label for="loginPassword" class="grey-text">Your password</label>
            <input type="password" id="loginPassword" class="form-control" />
            <br />
            <p class="h4 form-label mb-4">Business Details</p>
            <label for="BusinessName" class="grey-text">Business Name</label>
            <input type="text" id="BusinessName" class="form-control" />
            <br />
            <label for="profession" class="grey-text"
              >What is your primary profession ?</label
            >
            <input
              type="text"
              id="profession"
              class="form-control"
              placeholder="e.g. Plumber, Electrician, Tiling"
            />
            <br />

            <div class=" mt-4">
              <button class="btn cus-btn reg-btn" type="submit">
                Register Now
              </button>
            </div>
          </form>
          <!-- Default form login -->
        </mdb-col>
        <mdb-col>
          <h4 class="text-center right-label">Register your business now !</h4>
          <h5 class="text-center">Already have an account ?</h5>
          <router-link to="/login">
            <p class="text-center">Sign in</p>
          </router-link>
          <img
            src="../assets/completeTask_g.png"
            alt="BusinessJoining"
            class="my-3 business-img"
          />
          <h5 class="text-center right-label">
            You are one click behind making your business live !
          </h5>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <Footer />
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
export default {
  name: "Register",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    Footer,
    Banner,
  },
};
</script>

<style scoped>
form {
  background: var(--lightBg);
  padding: 2.5rem 3rem;
}
.form-label {
  font-weight: bold;
  color: var(--brand);
}
.reg-btn {
  font-size: 1rem;
}
.right-label {
  font-weight: 800;
  padding: 2rem 0;
  color: var(--brand);
}
.business-img {
  width: 100%;
}
</style>

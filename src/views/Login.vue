<template>
  <div id="#login">
    <Banner
      height="35"
      img_url="https://images.unsplash.com/photo-1454988501794-2992f706932e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    />
    <mdb-container>
      <!-- Default form login -->
      <h3 class="form-label text-center mt-5">Login now and start hiring !</h3>
      <form class="login-form">
        <!-- <div class="avatar"></div>
        <p class="h4 text-center mb-4 form-label">Sign in</p>-->
        <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
        <input type="password" id="defaultFormLoginPasswordEx" class="form-control" />
        <div class="text-center mt-4">
          <router-link to="/profile">
            <button class="btn cus-btn" type="submit">Login</button>
          </router-link>
        </div>
      </form>
      <!-- Default form login -->
      <div class="rest-text my-5 text-center">
        <h5>Don't have account yet? No Worries !</h5>
        <router-link to="/business-register">
          <h6>Register Now</h6>
        </router-link>
      </div>
    </mdb-container>
    <Footer />
  </div>
</template>

<script>
import { mdbContainer } from "mdbvue";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
export default {
  name: "Login",
  components: {
    Banner,
    mdbContainer,
    Footer
  }
};
</script>

<style scoped>
.login-form {
  position: relative;
  margin: 3rem auto 3rem auto;
  background: var(--lightBg);
  padding: 2rem 3rem;
  width: 400px;
}
.rest-text {
  width: 25vw;
  margin: 2rem auto;
}
.form-label {
  font-weight: bold;
  color: var(--brand);
}
.avatar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.3);
  background: var(--lightBg);
}
</style>

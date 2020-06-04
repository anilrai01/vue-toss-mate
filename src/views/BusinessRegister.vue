<template>
  <div id="businessRegister">
    <Banner
      height="40"
      img_url="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    >
      <div class="own-overlay"></div>
      <div class="register-msg">
        <h2>List your business now and start earning</h2>
        <h4>Get Job Offers by sitting at home</h4>
        <h5>Your Job, Your Skills, Your Choice</h5>
      </div>
    </Banner>
    <WorkProcess />
    <div class="register-form mt-5">
      <form>
        <!-- Default form register -->
        <h4 class="text-center mb-4">Register Now</h4>
        <h5 class="text-center px-5 mb-5">
          Please fill up the details below with genuine data. Our team will
          contact you as soon as possible for further procedure
        </h5>
        <div class="style-form">
          <div class="form-group">
            <label for="firstName" class="white-text">First name</label>
            <input type="text" id="firstName" class="form-control" />
          </div>

          <div class="form-group">
            <label for="lastName" class="white-text">Last name</label>
            <input type="text" id="lastName" class="form-control" />
          </div>

          <div class="form-group">
            <label for="email" class="white-text">Your email</label>
            <input type="email" id="email" class="form-control" />
          </div>

          <div class="form-group">
            <label for="email2" class="white-text">Confirm your email</label>
            <input type="email2" id="phone" class="form-control" />
          </div>

          <div class="form-group">
            <label for="phone" class="white-text">Your Phone No.</label>
            <input type="phone" id="phone" class="form-control" />
          </div>

          <div class="form-group">
            <label for="post-code" class="white-text">PostCode</label>
            <input type="post-code" id="phone" class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label for="selectBus" class="white-text"
            >Select your business type</label
          >
          <select class="custom-select" id="selectBus">
            <option selected disabled>Select your business type...</option>
            <option value="Sole Trader">Sole Trader</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Looking for employment"
              >Looking for Employment</option
            >
          </select>
        </div>
        <div class="text-center mt-4">
          <button class="btn cus-btn" type="submit">Register</button>
        </div>

        <!-- Default form register -->
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import WorkProcess from "../components/Home/WorkProcess";
import Footer from "../components/Footer";
export default {
  name: "BusinessRegister",
  components: {
    Banner,
    WorkProcess,
    Footer,
  },
};
</script>

<style scoped>
h2,
h4,
h5 {
  color: #fff;
}
h2,
h4 {
  font-weight: bold;
}
.register-msg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 3rem;
}
.own-overlay {
  position: absolute;
  top: 0;
  left: 0;
  border-top: var(--brOverlayUnit) solid var(--brand);
  border-right: var(--brOverlayUnit) solid transparent;
  border-bottom: var(--brOverlayUnit) solid transparent;
  border-left: var(--brOverlayUnit) solid var(--brand);

  width: 0;
  height: 0;

  opacity: 0.4;
  z-index: -1;
}
.register-form {
  width: 100%;
  height: auto;
  background-image: radial-gradient(
      circle at 28% 93%,
      rgba(2, 2, 2, 0.04) 0%,
      rgba(2, 2, 2, 0.04) 50%,
      rgba(223, 223, 223, 0.04) 50%,
      rgba(223, 223, 223, 0.04) 100%
    ),
    radial-gradient(
      circle at 13% 75%,
      rgba(185, 185, 185, 0.04) 0%,
      rgba(185, 185, 185, 0.04) 50%,
      rgba(25, 25, 25, 0.04) 50%,
      rgba(25, 25, 25, 0.04) 100%
    ),
    radial-gradient(
      circle at 79% 39%,
      rgba(34, 34, 34, 0.04) 0%,
      rgba(34, 34, 34, 0.04) 50%,
      rgba(57, 57, 57, 0.04) 50%,
      rgba(57, 57, 57, 0.04) 100%
    ),
    linear-gradient(56deg, rgb(39, 37, 178), rgb(169, 88, 194));
  padding: 4rem 2rem;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
}
.register-form form {
  align-items: center;
  justify-content: center;
  width: 60%;
}
.style-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.style-form .form-group {
  flex-basis: 32%;
}
</style>

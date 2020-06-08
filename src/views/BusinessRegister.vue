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
    <TradieProcess />
    <RegisterForm />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import TradieProcess from "../components/BusinessRegister/TradieProcess";
import Footer from "../components/Footer";
import RegisterForm from "../components/BusinessRegister/RegisterForm";
export default {
  name: "BusinessRegister",
  components: {
    Banner,
    TradieProcess,
    Footer,
    RegisterForm
  }
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
</style>

<template>
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
          <input type="text" id="firstName" class="form-control" v-model="fname" />
        </div>

        <div class="form-group">
          <label for="lastName" class="white-text">Last name</label>
          <input type="text" id="lastName" class="form-control" v-model="lname" />
        </div>

        <div class="form-group">
          <label for="email" class="white-text">Your email</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>

        <div class="form-group">
          <label for="email2" class="white-text">Confirm your email</label>
          <input type="email2" id="phone" class="form-control" v-model="email2" />
        </div>

        <div class="form-group">
          <label for="phone" class="white-text">Your Phone No.</label>
          <input type="phone" id="phone" class="form-control" v-model="phone" />
        </div>

        <div class="form-group">
          <label for="post-code" class="white-text">PostCode</label>
          <input type="post-code" id="phone" class="form-control" v-model="postCode" />
        </div>
      </div>

      <div class="form-group">
        <label for="selectBus" class="white-text">Select your business type</label>
        <select class="custom-select" id="selectBus" v-model="businessType">
          <option selected disabled>Select your business type...</option>
          <option value="Sole Trader">Sole Trader</option>
          <option value="Business Owner">Business Owner</option>
          <option value="Looking for employment">Looking for Employment</option>
        </select>
      </div>
      <div class="smooth" v-if="businessType !== ''">
        <div class="form-group" v-if="businessType == 'Sole Trader'">
          <label for="tradeName" class="white-text">What is your Trade Name</label>
          <input type="text" id="tradeName" class="form-control" v-model="soleTradeName" />
        </div>

        <div class="form-group" v-if="businessType == 'Business Owner'">
          <label for="businessName" class="white-text">What is your Business Name</label>
          <input type="text" id="businessName" class="form-control" v-model="businessName" />
        </div>

        <div class="form-group">
          <label for="selectTrade" class="white-text">Select a Trade</label>
          <select class="custom-select" id="selectTrade" v-model="tradeSelect">
            <option selected disabled>Select your trade type...</option>
            <option value="Air Conditioning Specialist">Air Conditioning Specialist</option>
            <option value="Antenna Service">Antenna Service</option>
            <option value="Appliance Installation">Appliance Installation</option>
          </select>
        </div>

        <div class="form-group">
          <label for="how" class="white-text">How did you hear about us?</label>
          <input type="text" class="form-control" v-model="findHow" />
        </div>
      </div>

      <div v-if="businessType == 'Business Owner'"></div>

      <div class="text-center mt-4">
        <button class="btn cus-btn" type="submit">Register</button>
      </div>

      <!-- Default form register -->
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      email2: "",
      phone: "",
      postCode: "",
      businessType: "",
      soleTradeName: "",
      businessName: "",
      tradeSelect: "",
      findHow: ""
    };
  }
};
</script>

<style scoped>
h4,
h5 {
  color: #fff;
}
h4 {
  font-weight: bold;
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
.smooth {
  transition: 0.3s ease-in-out;
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
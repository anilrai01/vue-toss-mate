<template>
  <div class="footer-bg pt-5 pb-3">
    <mdb-container>
      <mdb-row>
        <mdb-col col="4">
          <h2>ToosMate</h2>
          <mdb-icon class="icon" fab icon="facebook-f" />
          <mdb-icon class="icon" fab icon="twitter" />
          <mdb-icon class="icon" far icon="envelope" />
          <mdb-icon class="icon" fab icon="youtube" />
          <mdb-icon class="icon" fab icon="linkedin" />
        </mdb-col>
        <mdb-col col="2">
          <h5>Company</h5>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Help</li>
          </ul>
        </mdb-col>
        <mdb-col col="2">
          <h5>Businesses</h5>
          <ul>
            <li>Register my business</li>
            <li>Awards</li>
            <li>Guide to our Platform</li>
            <li>Help</li>
          </ul>
        </mdb-col>
        <mdb-col col="2">
          <h5>Cities</h5>
          <ul>
            <li>Sydney</li>
            <li>Melbourne</li>
            <li>Brisbane</li>
            <li>Perth</li>
            <li>Adelaide</li>
          </ul>
        </mdb-col>
        <mdb-col col="2">
          <h5>About ToosMate</h5>
          <ul>
            <li>About us</li>
            <li>How we operate</li>
            <li>Our Team</li>
            <li>We're hiring</li>
            <li>Contact us</li>
          </ul>
        </mdb-col>
      </mdb-row>
      <hr />
      <h6>@All rights reserved Toosmate from PrithakCreation</h6>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";

export default {
  name: "Footer",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<style scoped>
.footer-bg {
  width: 100%;
  background: var(--cream);
}
.icon {
  font-size: 1.2rem;
  margin-right: 1rem;
}
h2,
h5 {
  font-weight: bold;
}
ul {
  list-style-type: none;
}
li {
  line-height: 2.3rem;
}
</style>

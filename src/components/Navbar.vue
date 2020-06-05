<template>
  <div>
    <div class="address-bar">
      <h6 class="p-0 m-0 mr-2">Get Connected with us:</h6>
      <mdb-icon icon="phone-alt" />&nbsp;&nbsp;+123 456 789
    </div>
    <mdb-navbar class="custom-nav" light position="top-sticky">
      <mdb-container>
        <mdb-navbar-brand href="#">
          <router-link to="/">
            <img src="../assets/toss-logo.png" class="logo" alt />
          </router-link>
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <router-link to="/">
              <mdb-nav-item href="#" class="active">Home</mdb-nav-item>
            </router-link>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle
                tag="a"
                navLink
                color="stylish"
                slot="toggle"
                waves-fixed
              >Categories</mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <h2 class="mb-4 drop-title">Popular Categories</h2>
                <div class="menus">
                  <div class="menu" v-for="(menu,index) in getDropdown" :key="index">{{menu}}</div>
                </div>
              </mdb-dropdown-menu>
            </mdb-dropdown>
            <mdb-nav-item href="#">Articles</mdb-nav-item>
            <mdb-nav-item href="#">Pricing</mdb-nav-item>
          </mdb-navbar-nav>
          <mdb-form-inline>
            <!-- <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> -->
            <a href="#" class="cus-link">MarketPlace</a>
            <router-link to="get-quotes">
              <mdb-btn color="indigo" size="md" class="cus-btn my-0" type="submit">Get Quotes</mdb-btn>
            </router-link>
            <router-link to="/business-register">
              <mdb-btn
                color="indigo"
                size="md"
                class="cus-btn my-0"
                type="submit"
              >List your business</mdb-btn>
            </router-link>
          </mdb-form-inline>
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  // mdbDropdownItem,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbBtn,
  mdbIcon,
  mdbFormInline
} from "mdbvue";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    // mdbDropdownItem,
    mdbBtn,
    mdbIcon,
    mdbFormInline
  },
  computed: {
    ...mapGetters(["getDropdown"])
  }
};
</script>

<style scoped>
.address-bar {
  background: var(--lightBg);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  min-height: 3rem;
}
.stick {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0 !important;
}
h6 {
  font-weight: bold;
}
.logo {
  width: 5rem;
}
.custom-nav {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
}

.nav-items {
  color: #000 !important;
}
.cus-link {
  color: #312e2e;
  padding: 0 2rem;
}

.dropdown-menu {
  min-width: 55vw !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.menus {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.menu {
  flex-basis: 25%;
  cursor: pointer;
  padding: 5px;
}
.menu:hover {
  background: #eee;
}
.drop-title {
  padding-left: 1rem;
  border-left: 5px solid var(--brand);
}
</style>

<template>
  <mdb-navbar class="custom-nav" light>
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
              class="position-relative"
            >Categories</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <h4 class="mb-4 drop-title">Popular Categories</h4>
              <!-- <div class="menus">
                <div
                  class="menu"
                  v-for="(menu,index) in getDropdown"
                  :key="index"
                  @click="handleClickRoute(menu)"
                >{{menu}}</div>
              </div>-->
              <div class="menus">
                <div class="menu">
                  <div class="menu-head">Air Conditioning</div>
                  <div class="menu-list">
                    <li>Air Conditioning Engineers</li>
                    <li>Air Conditioning Installation</li>
                    <li>Air Conditioning Maintainance</li>
                  </div>
                </div>
              </div>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <mdb-nav-item href="#">Articles</mdb-nav-item>
          <mdb-nav-item href="#">Pricing</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-form-inline>
          <!-- <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> -->
          <a href="#" class="cus-link">MarketPlace</a>
          <router-link to="/get-quotes">
            <mdb-btn color="indigo" size="md" class="cus-btn my-0" type="submit">Get Quotes</mdb-btn>
          </router-link>
          <router-link to="/business-register">
            <mdb-btn
              color="indigo"
              size="md"
              class="cus-btn my-0 text-center"
              type="submit"
            >List your business</mdb-btn>
          </router-link>
          <router-link to="/login">
            <mdb-btn
              size="md"
              class="cus-btn-outline font-weight-bold my-0 text-center"
              type="submit"
              v-if="!getUserAuth.u_token"
            >Sign In</mdb-btn>
          </router-link>
          <router-link to="/profile">
            <div class="u-profile bg-center-style" :style="u_style" v-if="getUserAuth.u_token"></div>
          </router-link>
        </mdb-form-inline>
      </mdb-navbar-toggler>
    </mdb-container>
  </mdb-navbar>
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
  mdbFormInline
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";
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
    mdbFormInline
  },
  computed: {
    ...mapGetters(["getDropdown", "getUserAuth"]),
    u_style() {
      return { "background-image": `url(${this.getUserAuth.u_img})` };
    }
  },
  methods: {
    ...mapActions(["setQuoteBusiness"]),
    handleClickRoute(name) {
      // this.setQuoteBusiness(name);
      this.$router.push(`/categories-view/${name}`);
    }
  }
};
</script>

<style scoped>
.custom-nav {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
  background: #fff !important;
  /* position: fixed;
  width: 100%; */
  /* position: sticky;
  top: 0; */
  /* z-index: 500 !important; */
}
.sticky-top {
  z-index: 2 !important;
}
.logo {
  width: 5rem;
}
.nav-items {
  color: #000 !important;
}
.cus-link {
  color: #312e2e;
  padding: 0 2rem;
}
.dropdown-menu {
  position: absolute !important;
  min-width: 50vw !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.7rem;
}

.drop-title {
  padding-left: 1rem;
  border-left: 5px solid var(--brand);
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
  padding: 3px;
  font-size: 0.9rem;
}
.menu-head {
  /* font-weight: bold; */
  font-size: 1rem;
  color: #fff;
  background: var(--brand);
  padding: 0 0.5rem;
}
.menu-list {
  /* font-size: 1rem; */
  margin: 0.8rem 0 1rem 1rem;
}
.menu-list li {
  margin-bottom: 0.5rem;
}
/* .menu:hover {
  background: #eee;
} */

.u-profile {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--brand);
}
</style>

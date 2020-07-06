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
            <mdb-nav-item href="#">Home</mdb-nav-item>
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
                <div class="menu" v-for="(drop, index) in getDropdown2" :key="index">
                  <div class="menu-head">
                    <mdb-icon icon="angle-right mr-2" />
                    {{drop.title}}
                    <!-- {{drop.links.length}} -->
                  </div>

                  <!-- <div
                    class="menu-list"
                    v-for="idrop in drop.links.slice(0,4)"
                    :key="drop.links.indexOf(idrop)"
                  >
                    <li>{{idrop}}</li>
                  </div>-->
                </div>
              </div>
              <hr class="m-0" />
              <router-link to="/all-categories">
                <h6 class="text-center mb-0 py-2 my-2 text-grey c-p">Show all Categories</h6>
              </router-link>
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
  mdbFormInline,
  mdbIcon
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
    mdbFormInline,
    mdbIcon
  },
  data() {
    return {
      subDrop: false
    };
  },
  computed: {
    ...mapGetters(["getDropdown", "getUserAuth", "getDropdown2"]),
    u_style() {
      return { "background-image": `url(${this.getUserAuth.u_img})` };
    }
  },
  methods: {
    ...mapActions(["setQuoteBusiness"]),
    handleClickRoute(name) {
      // this.setQuoteBusiness(name);
      // this.$router.push(`/categories-view/${name}`);
      console.log(name);
    },
    handleDropDownClick() {
      console.log("Hey");
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

  width: 65vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 2rem 0;
}

.drop-title {
  padding-left: 1rem;
  border-left: 5px solid var(--brand);
}
.menus {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
}
.menu {
  flex-basis: 25%;
  cursor: pointer;
  padding: 3px;
  font-size: 0.9rem;
}
.menu-head {
  font-size: 1rem;
  position: relative;
  transition: 0.3s ease-in-out;
}
.menu-head span,
.menu-head .fas {
  transition: all 0.3s ease-in-out;
}
.menu-head .fas {
  position: relative;
}
.menu-head:hover {
  color: var(--brand);
  background: #eee;
}
.menu-head:hover .fas {
  left: 5px;
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

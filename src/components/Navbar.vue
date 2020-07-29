<template>
  <mdb-navbar id="myNav" class="custom-nav" dark>
    <div class="container inner-cont">
      <mdb-navbar-brand href="#">
        <img src="../assets/wlogo@4x.png" class="logo c-p" alt @click="redirectHome" />
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <router-link to="/">
            <mdb-nav-item href="#" class="text-white">Home</mdb-nav-item>
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
                    {{ drop.title }}
                    <!-- {{drop.links.length}} -->
                    <div class="menu-list">
                      <li
                        v-for="idrop in drop.links"
                        :key="drop.links.indexOf(idrop)"
                        @click="handleClickRoute(idrop)"
                      >{{ idrop }}</li>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="m-0" />
              <router-link to="/all-categories">
                <h6 class="text-center mb-0 py-2 my-2 text-grey c-p">Show all Categories</h6>
              </router-link>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <mdb-nav-item href="#">Articles</mdb-nav-item>
          <!-- <mdb-nav-item href="#">Pricing</mdb-nav-item> -->
        </mdb-navbar-nav>
        <mdb-form-inline>
          <!-- <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> -->
          <!-- <a href="#" class="cus-link text-white">MarketPlace</a> -->
          <router-link to="/browse-task">
            <mdb-btn color="indigo" size="md" class="cus-btn my-0" type="submit">Browse Task</mdb-btn>
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
              class="cus-btn-outline font-weight-bold my-0 text-center bg-transparent text-white"
              type="submit"
              v-if="!getUserAuth.u_token"
            >Sign In</mdb-btn>
          </router-link>
          <router-link to="/profile">
            <div class="u-profile bg-center-style" :style="u_style" v-if="getUserAuth.u_token"></div>
          </router-link>
        </mdb-form-inline>
      </mdb-navbar-toggler>
    </div>
  </mdb-navbar>
</template>

<script>
import {
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
  mdbIcon,
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  components: {
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
    mdbIcon,
  },
  data() {
    return {
      subDrop: false,
    };
  },
  computed: {
    ...mapGetters(["getDropdown", "getUserAuth", "getDropdown2"]),
    u_style() {
      return { "background-image": `url(${this.getUserAuth.u_img})` };
    },
  },
  methods: {
    ...mapActions(["setQuoteBusiness"]),
    handleClickRoute(name) {
      // this.setQuoteBusiness(name);
      this.setQuoteBusiness(name);
      this.$router.push(`/categories-view/${name}`);
    },
    handleDropDownClick() {
      console.log("Hey");
    },
    redirectHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.custom-nav {
  position: fixed;
  top: 0;
  max-height: 70px;
  width: 100vw;
  z-index: 30 !important;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
}
.inner-cont {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(116, 209, 76, 0.61);
}
.logo {
  width: 5rem;
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
  z-index: 32;
}
.menu {
  flex-basis: 25%;
  cursor: pointer;
  padding: 3px;
  font-size: 0.9rem;
}
.menu-head {
  position: relative;
  font-size: 1rem;
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
  /* color: var(--brand); */
  background: #eee;
}
.menu-head:hover .fas {
  /* left: 5px; */
  transform: rotate(90deg);
}
.menu-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: auto;
  background: #fff;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 50;
  padding: 1rem;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.6);
}
.menu-list li {
  margin-bottom: 0.5rem;
}
.menu:hover .menu-list {
  visibility: visible;
  opacity: 1;
}
.menu-list li:hover {
  background: var(--cream);
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
/* New Nav Style */
.transform-nav {
  background: var(--greenMask);
  padding: 0 auto;
}
.transform-nav .inner-cont {
  border: none;
  /* z-index: 500; */
}
</style>

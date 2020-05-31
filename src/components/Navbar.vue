<template>
  <div>
    <div class="address-bar">
      <h6 class="p-0 m-0 mr-2">Get Connected with us:</h6>
      <mdb-icon icon="phone-alt" />&nbsp;&nbsp;+123 456 789
    </div>
    <mdb-navbar color="indigo" dark position="top-sticky">
      <mdb-container>
        <mdb-navbar-brand href="#">TossMate</mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item href="#" class="active">Home</mdb-nav-item>
            <mdb-nav-item href="#">Articles</mdb-nav-item>
            <mdb-nav-item href="#">Pricing</mdb-nav-item>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle
                tag="a"
                navLink
                color="stylish"
                slot="toggle"
                waves-fixed
              >Categories</mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item>Plumbing</mdb-dropdown-item>
                <mdb-dropdown-item>Carpenting</mdb-dropdown-item>
                <mdb-dropdown-item>Tiling</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
          <mdb-form-inline>
            <!-- <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> -->
            <mdb-btn color="indigo" outline="white" size="md" class="my-0" type="submit">Get Quotes</mdb-btn>
            <mdb-btn
              color="indigo"
              outline="white"
              size="md"
              class="my-0"
              type="submit"
            >List your business</mdb-btn>
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
  mdbDropdownItem,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbBtn,
  mdbIcon,
  mdbFormInline
} from "mdbvue";
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
    mdbDropdownItem,
    mdbBtn,
    mdbIcon,
    mdbFormInline
  }
};
</script>

<style scoped>
.address-bar {
  /* background: #ccc; */
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
</style>

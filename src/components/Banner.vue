<template>
  <mdb-view class="banner-pic my-5" :style="defineStyle">
    <mdb-mask overlay="black-strong fix-vis" />
    <slot class="slot-vis"></slot>
  </mdb-view>
</template>

<script>
import { mdbView, mdbMask } from "mdbvue";
export default {
  name: "Banner",
  props: {
    height: {
      type: String
    },
    img_url: {
      type: String
    }
  },
  components: {
    mdbView,
    mdbMask
  },
  computed: {
    defineStyle() {
      return {
        height: this.height + "vh",
        "background-image": `url(${this.img_url})`
      };
    }
  }
};
</script>

<style scoped>
.fix-vis {
  z-index: -1;
  opacity: 0.8 !important;
}
.slot-vis {
  z-index: 5;
}
.banner-pic {
  z-index: 1;
  width: 100%;
  /* height: 40vh; */
  /* background-image: url("https://images.unsplash.com/photo-1587407646633-aa1348f0dd9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
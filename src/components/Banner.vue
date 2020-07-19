<template>
  <mdb-view class="banner-pic" :style="defineStyle">
    <mdb-mask :overlay="computeCSS" />
    <slot class="slot-vis"></slot>
  </mdb-view>
</template>

<script>
import { mdbView, mdbMask } from "mdbvue";
export default {
  name: "Banner",
  props: {
    height: {
      type: String,
      default: "auto",
    },
    img_url: {
      type: String,
    },
    light: {
      type: Boolean,
    },
  },
  components: {
    mdbView,
    mdbMask,
  },
  computed: {
    defineStyle() {
      return {
        height: this.height + "vh",
        "background-image": `url(${this.img_url})`,
      };
    },
    computeCSS() {
      if (this.light) {
        return "black-light fix-vis";
      } else {
        return "black-strong fix-vis";
      }
    },
  },
};
</script>

<style scoped>
.fix-vis {
  opacity: 0.8 !important;
}
.slot-vis {
  position: absolute;
}
.banner-pic {
  position: relative;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

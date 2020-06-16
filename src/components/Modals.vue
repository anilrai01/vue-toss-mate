<template>
  <div class="modal-grp">
    <mdb-modal size="lg" :show="show" @close="handleVisiblity">
      <mdb-modal-header>
        <mdb-modal-title>
          <slot name="header"></slot>
        </mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <slot name="body"></slot>
      </mdb-modal-body>
      <mdb-modal-footer v-show="!quoteModel">
        <mdb-btn class="cus-btn" @click.native="handleVisiblity">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn
} from "mdbvue";
export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn
  },
  props: {
    messageTitle: {
      type: String,
      default: "Connection Error !"
    },
    show: {
      type: Boolean,
      default: false
    },
    quoteModel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleVisiblity() {
      this.$emit("visibleOff");
    }
  }
};
</script>
<style scoped>
.modal-grp {
  position: relative;
  z-index: 999 !important;
}
</style>
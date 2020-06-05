<template>
  <div>
    <mdb-modal size="lg" :show="show" @close="handleVisiblity">
      <mdb-modal-header>
        <mdb-modal-title>
          <h3 class="text-danger">
            Alert !
          </h3>
        </mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <h4>{{ message }}</h4>
      </mdb-modal-body>
      <mdb-modal-footer>
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
  mdbBtn,
} from "mdbvue";
export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
  },
  props: {
    message: {
      type: String,
      default: "Connection Error !",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleVisiblity() {
      this.$emit("visibleOff");
    },
  },
};
</script>

<template>
  <div class="btn-group">
    <button
      type="submit"
      class="outline-btn"
      @click="handlePrev"
      :disabled="stat == 10 ? true : false"
      value="Previous"
    >Previous</button>
    <button
      type="submit"
      class="brand-btn"
      @click="handleNext"
      :disabled="decideNext"
      value="Next"
    >Next</button>
  </div>
</template>

<script>
export default {
  name: "BtnGroup",

  props: {
    stat: {
      type: Number
    }
  },
  methods: {
    handleNext() {
      this.$emit("next");
      // console.log("Btn Method: ", this.stat);
    },
    handlePrev() {
      this.$emit("handlePrev");
    }
  },
  computed: {
    decideNext() {
      if (this.stat == 100) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    stat() {
      // console.log("BTN watch: ", this.stat);
    }
  }
};
</script>

<style scoped>
.btn-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.outline-btn,
.brand-btn {
  padding: 0.8rem;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}
.outline-btn {
  width: 50%;
  outline: none;
  background: #fff;
  border: 1px solid var(--brand);
  color: var(--brand);
}
.brand-btn {
  width: 50%;
  background: var(--brand);
  border: none;
  color: #fff;
}
</style>
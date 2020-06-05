<template>
  <div class="list-dir" v-if="filterArray" :style="setWidth">
    <div
      class="list-dir-list"
      v-for="(list, index) in filterArray"
      :key="index"
      @click="handleClick(list)"
    >{{list}}</div>
  </div>
</template>

<script>
export default {
  name: "SearchList",
  data() {
    return {
      visibility: false
    };
  },
  props: {
    filterArray: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: "0"
    }
  },
  computed: {
    setWidth() {
      return `width: ${this.width}%`;
    }
  },
  methods: {
    handleClick(value) {
      this.$emit("setVal", value);
    }
  },
  watch: {
    filterArray() {
      if (this.filterArray == []) {
        this.visibilitty = false;
      } else {
        this.visibility = true;
      }
    }
  }
};
</script>

<style scoped>
.list-dir {
  position: absolute;
  top: 100%;
  left: 0;
  /* transform: translateY(50%); */
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.list-dir-list {
  cursor: pointer;
  width: 100%;
  padding: 1rem;
}
.list-dir-list:hover {
  background: #eee;
}
</style>
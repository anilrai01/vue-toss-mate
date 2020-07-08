<template>
  <div class="list-dir" v-if="filterArray" :style="setWidth">
    <div
      class="list-dir-list"
      v-for="(list, index) in filterArray"
      :key="index"
      @click="handleClick(list)"
    >
      <p class="p-0 m-0" v-html="highlight(list)"></p>
    </div>
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
    },
    keyword: {
      type: String,
      default: ""
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
    },
    highlight(word) {
      return word.replace(
        this.keyword,
        `<span class="font-weight-bold"><mark>${this.keyword}<mark></span>`
      );
      //   return `<span class="make-it-bold">${word}</span>`;
    }
  },
  watch: {
    // keyword() {
    //   console.log(this.keyword);
    // },
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
  /* z-index: 500; */
}

.list-dir-list {
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  /* font-weight: bold; */
}
.list-dir-list:hover {
  background: #eee;
}
</style>
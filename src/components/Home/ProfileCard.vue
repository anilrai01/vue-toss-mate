<template>
  <div
    class="p-card d-flex f-row j-sb a-c"
    :class="{ bigMargin: computeCss == true, medMargin: computeMedCss == true }"
  >
    <img class="p-img" :src="img" />
    <div class="p-desc d-flex f-col j-c">
      <div class="p-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div class="p-det d-flex f-row j-sb">
        <div class="p-name">Air Conditioning</div>
        <div class="p-price text-brand2 font-weight-bold">$200</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    big: {
      type: Boolean,
      default: false,
    },
    med: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: "",
    },
  },
  computed: {
    computeCss() {
      if (this.big == true && this.med == false) {
        return true;
      } else {
        return false;
      }
    },
    computeMedCss() {
      if (this.med == true && this.big == false) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.p-card {
  padding: 1rem;
  background: #fff;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4); */
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  /* margin: 0 2rem; */
}
.p-card:hover {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4);
}
.bigMargin {
  width: 22rem !important;
  padding: 1rem;
}
.medMargin {
  width: 17rem !important;
  padding: 0.8rem;
}
.medMargin img {
  width: 4rem;
  height: 4rem;
}
.p-img {
  flex-basis: 25%;
  width: 5rem;
  height: 5rem;
  background: var(--brand2);
  border-radius: 50%;
  margin-right: 0.8rem;
  object-fit: cover;
}
.p-desc {
  flex-basis: 70%;
}
.p-title {
  font-size: 0.8rem;
}
.p-det {
  margin-top: 0.6rem;
}
.p-name {
  font-size: 0.8rem;
}

/* Typography */
.bigMargin .p-desc .p-title {
  font-size: 1rem;
}
.bigMargin .p-desc .p-det .p-price {
  font-size: 1.7rem;
}
.bigMargin .p-desc .p-det .p-name {
  font-size: 0.9rem;
}
.medMargin .p-desc .p-title {
  font-size: 0.8rem;
}
.medMargin .p-desc .p-det .p-price {
  font-size: 1.5rem;
}
.medMargin .p-desc .p-det .p-name {
  font-size: 0.7rem;
}
</style>

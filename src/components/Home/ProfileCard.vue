<template>
  <div
    class="p-card d-flex f-row j-sb a-c"
    :class="{'bigMargin' : (computeCss == true), 'medMargin' : (computeMedCss == true)}"
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
      default: false
    },
    med: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: ""
    }
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
    }
  }
  //   mounted() {
  //     console.log("Big: ", this.big);
  //     console.log("MEd: ", this.med);
  //   }
};
</script>

<style scoped>
.p-card {
  /* width: 22rem; */
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.p-card:hover {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4);
}
.bigMargin {
  flex-basis: 22%;
  /* width: 20rem !important; */
  padding: 1rem;
}
.medMargin {
  flex-basis: 18%;
  /* width: 17rem !important; */
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
</style>
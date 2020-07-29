<template>
  <mdb-container class="wp-margin">
    <Modals :show="showVideoModel" @visibleOff="videoModelOff" wpVidModel>
      <h4 slot="header" class="font-weight-bold">Learn through our tutorials ...</h4>
      <iframe
        src="https://www.youtube.com/embed/CyD8hAjj8L8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        slot="body"
        class="w-100 wpVid"
      ></iframe>
    </Modals>
    <h1 class="text-brand2 wp-heading font-helvNeue">So... how does it work?</h1>
    <mdb-row class="my-5">
      <mdb-col col="4">
        <img src="../../assets/search_g.png" />
        <h6>1. Search your required job from our list</h6>
        <p>Type any relevant topic of your required job in the search field</p>
      </mdb-col>
      <mdb-col col="4">
        <img src="../../assets/choose_g.png" />
        <h6>2. Choose from our large variety of choices</h6>
        <p>
          There are lare option for you to decide the right choice. You can
          check their work history and reviews too
        </p>
      </mdb-col>
      <mdb-col col="4">
        <img src="../../assets/deal_g.png" />
        <h6>3. Select and choose tradie on your own</h6>
        <p>Have a direct contact with your tradie and make deal accordingly</p>
      </mdb-col>
    </mdb-row>
    <p class="text-center">
      Watch a
      <span class="text-brand2 font-weight-bold c-p" @click="enableVideoModel">video</span>
      instead ?
    </p>

    <mdb-btn
      class="align bg-brand2"
      v-if="$route.name !== 'GetQuotes'"
      @click="enableMultiStepForm"
    >Get Started</mdb-btn>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
import Modals from "../Modals";
import { mapActions } from "vuex";
export default {
  name: "WorkProcess",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    Modals,
  },
  data() {
    return {
      showVideoModel: false,
    };
  },
  methods: {
    ...mapActions(["setNmultiStepFormDispStat"]),
    enableVideoModel() {
      this.showVideoModel = true;
    },
    videoModelOff() {
      this.showVideoModel = false;
    },
    enableMultiStepForm() {
      this.setNmultiStepFormDispStat(true);
    },
  },
};
</script>

<style scoped>
.wp-heading {
  font-size: 3rem;
  font-weight: 800;
  margin: 5rem 0;
}
.col-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  text-align: center;
}
h6 {
  text-align: center;
  font-weight: bold;
  margin: 1rem 0;
}
img {
  height: 10rem;
}
.align {
  display: block;
  margin: 0 auto;
}
.wp-margin {
  margin: 7rem auto;
}
.wpVid {
  height: 25rem;
}
</style>
